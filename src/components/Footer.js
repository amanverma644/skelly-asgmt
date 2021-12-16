import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <footer className="my-2">
        <Container>
          <Row>
            <Col md={7}>
              <i class="fas fa-arrow-left"></i>
              <span className="mx-3">Back</span>
            </Col>
            <Col md={5} className="text-end">
              <Button class="btn rounded-pill" variant="outline-secondary">
                CONTINUE SHOPPING
              </Button>
              <Button class="btn rounded-pill" variant="success ">
                PROCEED TO CHECKOUT
              </Button>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
