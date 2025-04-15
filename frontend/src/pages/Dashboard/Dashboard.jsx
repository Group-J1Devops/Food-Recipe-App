import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Dashboard.scss";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleNavigateRecipe = (id) => {
    navigate(`/RecipeDetails/${id}`);
  };

  return (
    <Container className="dashboard">
      <h1 className="text-center mt-5 heading" data-aos="fade-down">
        Explore Recipes on <span>RecipEasy</span>
      </h1>

      {/* Search Section */}
      <div className="search-wrapper d-flex justify-content-center mb-4" data-aos="fade-up">
        <Form className="search-bar">
          <Form.Group className="position-relative" controlId="searchInput">
            <Form.Control type="text" placeholder="Search Recipes..." />
            <i className="fa fa-search search-icon"></i>
          </Form.Group>
        </Form>
      </div>

      {/* Recipe Grid */}
      <section className="recipecard row justify-content-center">
        {[...Array(8)].map((_, index) => (
          <Card
            key={index}
            className="recipe-card col-12 col-sm-6 col-md-4 col-lg-3"
            data-aos="zoom-in"
            onClick={() => handleNavigateRecipe(index + 1)}
          >
            <Card.Img
              variant="top"
              src="/Recipeasy-logo.png"
              className="recipe-img"
            />
            <Card.Body>
              <Card.Title>Delicious Ayamase</Card.Title>
              <Card.Text>
                Try out this authentic Nigerian dish with green pepper sauce and assorted meat.
              </Card.Text>
              <Button variant="outline-primary" className="w-100">
                View Recipe
              </Button>
            </Card.Body>
          </Card>
        ))}
      </section>
    </Container>
  );
};

export default Dashboard;