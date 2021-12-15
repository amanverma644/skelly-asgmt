import React from 'react'
import { Nav } from 'react-bootstrap'

const CheckoutSteps = () => {
  return (
    <Nav className="justify-content-end mb-5">
      <Nav.Item>
        <div className="steps">
          <i class="fas fa-shopping-cart"></i>
        </div>
      </Nav.Item>
      <div class="horizontal-line"></div>
      <Nav.Item>
        <div className="steps active">
          <i class="fas fa-truck"></i>
        </div>
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
