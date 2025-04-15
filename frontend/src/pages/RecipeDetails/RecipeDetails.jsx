import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./RecipeDetails.scss";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";

const RecipeDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container className="recipe-page">
      <div className="main-header" data-aos="fade-down">
        <h1>Ayamase</h1>
        <div className="meta-info">
          <span className="rating">
            4 <i className="fa-solid fa-star star"></i>
          </span>
          <span className="divider"></span>
          <span className="reviews">(3 reviews)</span>
          <span className="divider"></span>
          <span className="save">
            Save <i className="fa-regular fa-heart"></i>
          </span>
        </div>
        <h4 className="author">Recipe by: <span>Oreoluwa Ireyomi</span></h4>
      </div>

      <div className="recipe-body">
        <div className="left-panel">
          <Card className="image-card" data-aos="zoom-in">
            <Card.Img variant="top" src="/Recipeasy-logo.png" />
          </Card>

          <Card className="info-card" data-aos="fade-up">
            <Card.Body>
              <div className="info-item">
                <h5>Cooking Time</h5>
                <p>45 Minutes</p>
              </div>
              <div className="info-item">
                <h5>Min Serving</h5>
                <p>3 People</p>
              </div>
              <div className="info-item">
                <h5>Max Serving</h5>
                <p>5</p>
              </div>
            </Card.Body>
          </Card>

          <Card className="card-section" data-aos="fade-up">
            <Card.Body>
              <h3>How to make Ayamase</h3>
              <h4>Ingredients</h4>
              {[
                "1kg assorted meats (shaki, beef, ponmo)",
                "10 green bell peppers - remove seeds",
                "3 scotch bonnets",
                "4 large red onions",
                "Ground crayfish 1-2 tbsp",
                "1 cup palm oil"
              ].map((item, index) => (
                <p key={index}><i className="fa-solid fa-circle circle-icon"></i> {item}</p>
              ))}
            </Card.Body>
          </Card>

          <Card className="card-section" data-aos="fade-up">
            <Card.Body>
              <h3>Description</h3>
              <p>
                Ayamase, also known as ofada sauce, is a spicy green pepper sauce
                made with palm oil and assorted meat. This beloved Nigerian delicacy
                is flavorful and rich, perfect with ofada rice.
              </p>
            </Card.Body>
          </Card>
        </div>

        <div className="right-panel">
          <Card className="note-card" data-aos="fade-left">
            <Card.Body>
              <div className="note-header">
                <img src="/Recipeasy-logo.png" alt="Recipeasy" />
                <h3>Cook's Note</h3>
              </div>
              <p>
                This dish tastes even better the next day! Let the flavors marinate
                overnight and reheat gently for best results.
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default RecipeDetails;
