import React from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import CheckoutSteps from '../components/CheckoutSteps'
import PaymentMethods from '../components/PaymentMethods'
import DeliveryMethods from '../components/DeliveryMethods'

const ShippingScreen = () => {
  return (
    <>
      <Row>
        <Col md="8">
          <h4>Shipping and Payment</h4>
        </Col>
        <Col md="4">
          <CheckoutSteps />
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Button type="button" className="btn btn-success btn-lg">
            LOG IN
          </Button>
          <Button
            type="button"
            className="btn  btn-lg"
            variant="outline-secondary"
          >
            SIGN UP
          </Button>
          <h6 className="my-6">Shipping Information</h6>
          <Form className="my-4">
            <Row>
              <Col md="6">
                {' '}
                <Form.Group controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="rounded-pill"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col md="6" className="my-2">
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    className="rounded-pill"
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="6" className="my-2">
                {' '}
                <Form.Group controlId="fName">
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    className="rounded-pill"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col md="6" className="my-2">
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    className="rounded-pill"
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="6" className="my-2">
                {' '}
                <Form.Group controlId="lName">
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    className="rounded-pill"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col md="6" className="my-2">
                <Form.Group>
                  <Form.Control
                    type="number"
                    placeholder="Postal Code/ZIP"
                    className="rounded-pill"
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="6" className="my-2">
                {' '}
                <Form.Group controlId="phoneNumber">
                  <Form.Control
                    type="number"
                    placeholder="Phone number"
                    className="rounded-pill"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col md="6" className="my-2">
                <Form.Group>
                  <select class="form-select rounded-pill">
                    <option>Poland</option>
                    <option>India</option>
                    <option>Scotland</option>
                    <option>USA</option>
                    <option>UK</option>
                  </select>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col md="3">
          <h6>Payment method</h6>
          <PaymentMethods />
          <h6>Delivery method</h6>
          <DeliveryMethods />
        </Col>
      </Row>
    </>
  )
}

export default ShippingScreen
