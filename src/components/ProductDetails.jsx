import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-3">
      <Container>
        <Row>
          <Col>
            <img
              src={product.image}
              className="img-fluid"
              style={{ width: "290px" }}
            />
            <h1>{product.title}</h1>
            <h2 className="text-success">${product.price}</h2>
            <p>{product.description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
