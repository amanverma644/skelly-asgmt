import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

const ShippingForm = () => {
  return (
    <>
      <Row>
        <Col md="6" className="my-2">
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
    </>
  )
}

export default ShippingForm
