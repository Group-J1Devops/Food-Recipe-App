module.exports = {
    apps: [
      {
        name: "server",
        script: "index.js",
        cwd: "./server",
        env: {
          NODE_ENV: "development",
          PORT: 5002
        }
      },
      {
        name: "frontend",
        script: "npm",
        args: "start",
        cwd: "./frontend",
        env: {
          PORT: 3000
        }
      }
    ]
  };
  