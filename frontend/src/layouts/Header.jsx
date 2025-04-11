import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.scss";
import NavLink from "react-bootstrap/esm/NavLink";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg="dark" data-bs-theme="dark" style={{ width: "100%" }}>
          <Container>
            <NavLink
              to="/"
              className="text-decoration-none text-light mx-2"
              style={{ fontSize: "20px" }}
            >
              RecipeEasy
            </NavLink>
            <Nav className="me-auto">
              <Nav.Link to="#home">Home</Nav.Link>
              <Nav.Link to="#home">Create Recipe</Nav.Link>
            </Nav>
            <Nav className="text-end">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  className="dropdown_btn"
                  id="dropdown-basic"
                >
                  <div
                    style={{ width: "45px", height: "45px", cursor: "pointer" }}
                  >
                    <img
                      src="./user.png"
                      alt="User icon"
                      style={{ width: "100%", height: "!00%" }}
                    />
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <NavLink
                    to="/"
                    className="text-decoration-none text-light mx-2"
                  >
                    Login
                  </NavLink>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header