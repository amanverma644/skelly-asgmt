import React from 'react'
import { Image } from 'react-bootstrap'
import amazonPay from '../assets/images/paymentLogos/amazonPay.png'
import masterCard from '../assets/images/paymentLogos/masterCard.png'
import payPal from '../assets/images/paymentLogos/paypal.png'
import razorpay from '../assets/images/paymentLogos/razorpay.jpg'
import stripe from '../assets/images/paymentLogos/stripe.png'
import visa from '../assets/images/paymentLogos/visa.png'

const PaymentMethods = () => {
  return (
    <div>
      <Image
        className="payment-button rounded-pill"
        src={payPal}
        fluid
        width="70px"
      ></Image>
      <Image
        className="payment-button rounded-pill"
        src={visa}
        fluid
        width="70px"
      ></Image>
      <Image
        className="payment-button rounded-pill"
        src={razorpay}
        fluid
        width="70px"
      ></Image>
      <Image
        className="payment-button rounded-pill"
        src={masterCard.png}
        fluid
        width="70px"
      ></Image>
      <Image
        className="payment-button rounded-pill"
        src={amazonPay}
        fluid
        width="70px"
      ></Image>
      <Image
        className="payment-button rounded-pill"
        src={stripe}
        fluid
        width="70px"
      ></Image>
    </div>
  )
}

export default PaymentMethods
