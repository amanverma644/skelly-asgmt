import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const LoginScreen = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Form onSubmit={submitHandler} className="my-5">
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password" className="my-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Button type="submit" varient="primary" className="my-3">
              Log In
            </Button>
          </Form>

          <Row className="py-3">
            <Col>
              New Customer?&nbsp;
              <Link to="/">Register</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default LoginScreen
