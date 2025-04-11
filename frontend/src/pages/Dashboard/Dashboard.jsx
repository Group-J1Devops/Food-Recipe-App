import React from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mt-5">Explore Recipes on RecipEasy</h1>

        <section className="mx-auto">
          {/* Search Section */}

          <div className="d-flex justify-content-end">
            <Form
              className="mx-auto"
              style={{ maxWidth: "340px", width: "100%" }}
            >
              <Form.Group
                className="mb-3"
                style={{ position: "relative" }}
                controlId="formBasicEmail"
              >
                <Form.Control type="text" placeholder="Search Recipes..." />

                <div
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "6px",
                    cursor: "pointer",
                  }}
                >
                  <i className="fa-duotone fa-solid fa-xmark"></i>
                </div>
              </Form.Group>
            </Form>
          </div>

          {/* Recipe Section */}
        </section>
      </Container>
    </>
  );
};

export default Dashboard;
