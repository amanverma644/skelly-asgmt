import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import ShippingScreen from './screens/ShippingScreen'

function App() {
  return (
    <div>
      <Header />
      <Container>
        <ShippingScreen />
      </Container>
    </div>
  )
}

export default App
