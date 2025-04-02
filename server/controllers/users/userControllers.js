//
const userDB = require("../../models/users/userModel");
const bcrypt = require("bcryptjs");
const cloudinary = require("../../Cloudinary/cloudinary");

// User Registration
exports.register = async (req, res) => {
  try {
    const file = req.file ? req.file.path : "";
    const { username, email, password, confirmpassword } = req.body;

    // Validate required fields
    if (!username || !password || !email || !confirmpassword || !file) {
      return res.status(400).json({ errorMessage: "All fields are required." });
    }

    // Ensure passwords match
    if (password !== confirmpassword) {
      return res.status(400).json({ errorMessage: "Passwords do not match!" });
    }

    // Check if user already exists
    const existingUser = await userDB.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ errorMessage: "User already exists!" });
    }

    // Upload user profile image to Cloudinary (wrapped inside try-catch)
    let upload;
    try {
      upload = await cloudinary.uploader.upload(file);
    } catch (uploadError) {
      console.error("Cloudinary Upload Error:", uploadError);
      return res.status(500).json({ errorMessage: "Failed to upload image." });
    }

    // Hash password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 12);
    } catch (hashError) {
      console.error("Password Hashing Error:", hashError);
      return res.status(500).json({ errorMessage: "Failed to hash password." });
    }

    // Create and save new user
    const newUser = new userDB({
      username,
      email,
      password: hashedPassword,
      userprofile: upload.secure_url,
    });

    await newUser.save();
    return res
      .status(200)
      .json({ message: "User registered successfully!", user: newUser });
  } catch (error) {
    console.error("Unexpected Server Error:", error);
    return res
      .status(500)
      .json({ errorMessage: "Internal Server Error", error });
  }
};

//User login

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validate required fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ errorMessage: "Please fill in your email and password" });
    }

    //verify if user is existing in db
    const existingUser = await userDB.findOne({ email });
    if (existingUser) {
      const isMatch = await bcrypt.compare(password, existingUser.password);

      if (!isMatch) {
        res
          .status(404)
          .json({ errorMessage: "User not found, update your details and try again" });
      } else {
        //token generation
        const token = await existingUser.generateAuthToken();
        
        const result = {
          token
        }
        res.status(200).json({result, message: "User logged in successfully!"})
      }
    } else {
      return res
        .status(400)
        .json({ errorMessage: "This user does not exist in the db" });
    }
  } catch (error) {
    console.error("Unexpected Server Error:", error);
    return res
      .status(500)
      .json({ errorMessage: "Internal Server Error", error });
  }
};

//verify user

