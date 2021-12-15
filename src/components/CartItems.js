import React from 'react'
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap'

const CartItems = () => {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col md={3}>
              <Image
                className="rounded-pill"
                src="/images/productImages/sample-image-1.png"
                fluid
                rounded
              ></Image>
            </Col>
            <Col md={5}>
              <p>
                T-Shirt Summer Vibes
                <br />
                <span className="serial-no">#1234</span>
              </p>
            </Col>
            <Col md={4}>
              <p>$499</p>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col md={3}>
              <Image
                className="rounded-pill"
                src="/images/productImages/sample-image-2.png"
                fluid
                rounded
              ></Image>
            </Col>
            <Col md={5}>
              <p>
                Basic Slim Fit T-Shirt
                <br />
                <span className="serial-no">#4321</span>
              </p>
            </Col>
            <Col md={4}>
              <p>$699</p>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col md={12}>
              <div className=" d-grid gap-2  rounded-pill">
                <Button class="btn" variant="secondary" disabled>
                  Total Price <span className="mx-4">$1198</span>
                </Button>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
      <Row className="my-4">
        <Col md={2}>
          <i className="fas fa-truck" style={{ color: 'grey' }}></i>
        </Col>
        <Col md={10}>You are $2 away from free shipping!</Col>
      </Row>
    </>
  )
}

export default CartItems
