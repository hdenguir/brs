import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { clearCart, removeItem } from "../store/actions";
import ProductPage from "../components/ProductPage";

const Cart = ({ cart, clearCart, removeItem }) => {
  return (
    <Container>
      <ProductPage {...{ data: cart }} isCart />

      <ButtonGroup className="mb-2 justify-content-md-center w-100">
        <Button as={Link} to="/" variant="outline-dark">
          Continue Shopping
        </Button>
        <Button variant="outline-danger" size="sm" onClick={() => clearCart()}>
          Clear Cart
        </Button>
      </ButtonGroup>
    </Container>
  );
};

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps, { clearCart, removeItem })(Cart);
