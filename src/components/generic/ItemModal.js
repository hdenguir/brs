import React from "react";
import { useLocation } from "react-router-dom";
import { bool, func, string, oneOfType, element, object } from "prop-types";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Badge, Form } from "react-bootstrap";
import { addToCart, removeItem, updateQantity } from "../../store/actions";

const ItemModal = ({
  id,
  show,
  setModalShow,
  header,
  image_url,
  detail1,
  detail2,
  description,
  brewersTips,
  ingredients_all,
  foodPairing,
  addToCart,
  removeItem,
  updateQantity,
  cart,
  productInfo
}) => {
  const { pathname } = useLocation();

  const isOrdered = cart ? cart.filter(c => c.id === id).length > 0 : null;
  return (
    <Modal
      {...{ show }}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Product Information{" "}
          {isOrdered &&
            <Badge pill bg="success">
              Is ordered
            </Badge>}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="show-grid my-4">
            <Col xs={12} md={5} className="d-flex justify-content-center">
              <img
                src={image_url}
                alt={header + " image"}
                style={{
                  padding: "3vh",
                  height: "40vh",
                  objectFit: "scale-down",
                  backgroundColor: "#FFF"
                }}
              />
            </Col>
            <Col xs={12} md={7}>
              <h4 className="font-weight-bold">
                {header}
              </h4>
              <div className="text-muted">
                {detail1}
              </div>
              <small className="text-secondary font-italic">
                {'"' + detail2 + '"'}
              </small>
              <div>
                <small className="font-italic text-dark">
                  {description}
                </small>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <h6 className="font-weight-bold">Brewer's Tips</h6>
              <p>
                {brewersTips}
              </p>
              <h6 className="font-weight-bold">Ingredients</h6>
              <p>
                {ingredients_all}
              </p>
              <h6 className="font-weight-bold">Food Pairing</h6>
              <p>
                {foodPairing}
              </p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={6} lg={3} md="auto">
              {isOrdered &&
                pathname === "/cart" &&
                <Form.Select
                  className="me-2"
                  size="sm"
                  onChange={e => {
                    updateQantity({
                      id: productInfo.id,
                      quantity: +e.target.value
                    });
                    setModalShow(true);
                  }}
                  value={productInfo.quantity}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                </Form.Select>}
            </Col>
            <Col xs={6} lg={6} md="auto">
              {!isOrdered &&
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => addToCart({ product: { ...productInfo } })}
                >
                  Add to cart
                </Button>}

              {isOrdered &&
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeItem({ id: productInfo.id })}
                >
                  Remove from cart
                </Button>}
            </Col>
            <Col xs={6} lg={3} md="auto">
              <Button size="sm" onClick={() => setModalShow(false)}>
                Close
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Footer>
    </Modal>
  );
};

ItemModal.propTypes = {
  show: bool,
  setModalShow: func,
  header: string,
  image_url: string,
  detail1: oneOfType([string, element]),
  detail2: oneOfType([string, element]),
  description: string,
  brewersTips: string,
  ingredients_all: string,
  foodPairing: string,
  productInfo: object
};

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps, {
  addToCart,
  removeItem,
  updateQantity
})(ItemModal);
