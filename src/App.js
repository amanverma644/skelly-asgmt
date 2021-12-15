import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import ShippingScreen from './screens/ShippingScreen'
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<ShippingScreen />} exact />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
