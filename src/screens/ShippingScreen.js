import React from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from '../components/CheckoutSteps'
import PaymentMethods from '../components/PaymentMethods'
import DeliveryMethods from '../components/DeliveryMethods'
import ShippingForm from '../components/ShippingForm'
import CartItems from '../components/CartItems'
import Footer from '../components/Footer'

const ShippingScreen = () => {
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/login')
  }
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
          <Button
            type="button"
            className="btn btn-success btn-lg"
            onClick={submitHandler}
          >
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
            <ShippingForm />
          </Form>
        </Col>
        <Col md="3">
          <h6>Payment method</h6>
          <PaymentMethods />
          <h6>Delivery method</h6>
          <DeliveryMethods />
        </Col>
        <Col md="3">
          <h6>Your Cart </h6>
          <CartItems />
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default ShippingScreen
