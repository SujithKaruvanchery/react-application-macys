import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#" className="fw-bold text-dark">
                  Home
                </Nav.Link>
                <Nav.Link href="#" className="fw-bold text-dark">
                  Women
                </Nav.Link>
                <Nav.Link href="#" className="fw-bold text-dark">
                  Men
                </Nav.Link>
                <Nav.Link href="#" className="fw-bold text-dark">
                  Kids & Baby
                </Nav.Link>
                <Nav.Link href="#" className="fw-bold text-dark">
                  Handbags & Accessories
                </Nav.Link>
                <Nav.Link href="#" className="fw-bold text-dark">
                  Jewelry
                </Nav.Link>
                <Nav.Link href="#" className="fw-bold text-danger">
                  Sale
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <section className="text-center">
          <img
            src="https://assets.macysassets.com/app/navigation-wgl/static/images/logo.svg"
            className="img-fluid w-25 py-3"
            alt="Macy's Logo"
          />
        </section>
        <section>
          <Carousel>
            <Carousel.Item>
              <img src="https://levi.in/cdn/shop/files/Story_BannersRedloop_Desktop.jpg?v=1728464267" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://levi.in/cdn/shop/files/Desktop_2_85216b19-299f-4cd0-a53a-1818f1a3c69f.jpg?v=1727936031" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://levi.in/cdn/shop/files/DD-Desktop_with-models.jpg?v=1729330952" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
        <section>
          <div className="pt-2 container-fluid">
            <div className="row">
              <p className="text-center fw-bold">Summer Collection</p>
              <h4 class="text-center fw-bolder">
                The base collection - Ideal every day.
              </h4>
            </div>
          </div>
        </section>
        <section></section>
      </header>

      <Container>
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={6} md={4} lg={4} xl={3} xxl={3}>
              <Card className="mb-4" style={{Height:"500px"}}>
                <Card.Img variant="top" src={product.image} className="productImage img-fluid mx-auto d-block py-4" style={{height:"280px",width:"230px",}}/>
                <Card.Body>
                  <Card.Title className="productTitle">{product.title}</Card.Title>
                  <Card.Title className="fw-bold text-success">
                    ${product.price}
                  </Card.Title>
                  <Card.Text className="productDescription">{product.description}</Card.Text>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    View Products
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <section>
          <div class="pt-2 pb-1 bg-light">
            <p class="text-center fw-bolder">
              Maycs.com is a US. website. All offers are based on USD,U.S. times
              & dates. International exchanges rates will be applied
            </p>
          </div>
        </section>
        <section className="text-center">
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a href="#" class="text-dark">
                Privacy Notice
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-dark">
                Cookie Preference
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-dark">
                Interest Based Ads
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-dark">
                CA Privacy Rights
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-dark">
                Do Not Sell or Share My Personal Information
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-dark">
                Legal Notice
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-dark">
                Customer Bill of Rights
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-dark">
                CA Transparency in Supply Chains
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-dark">
                Product Recalls
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-dark">
                Pricing Policy
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-dark">
                Accessibility
              </a>
            </li>
          </ul>
        </section>
        <footer>
          <p class="mt-3 text-center text-muted">
            © 2024 Macy’s. All rights reserved. Macys.com, LLC, 151 West 34th
            Street, New York, NY 10001. Request our corporate name & address by
            email.
          </p>
        </footer>
      </Container>
    </div>
  );
};

export default ProductList;
