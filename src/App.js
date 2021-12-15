import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import ShippingScreen from './screens/ShippingScreen'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Container>
        <ShippingScreen />
      </Container>
      <Footer />
    </div>
  )
}

export default App
