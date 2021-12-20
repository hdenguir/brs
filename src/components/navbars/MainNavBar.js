import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

const MainNavBar = ({ cart }) => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Planity Test</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="text-capitalize">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="text-capitalize">
            Cart{" "}
            <Badge pill bg="success">
              ({cart.length})
            </Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps)(MainNavBar);
