import React from 'react'
import { Image } from 'react-bootstrap'

const PaymentMethods = () => {
  return (
    <div>
      <Image
        className="payment-button rounded-pill"
        src="./images/paymentLogos/paypal.png"
        fluid
        width="70px"
      ></Image>
      <Image
        className="payment-button rounded-pill"
        src="./images/paymentLogos/visa.png"
        fluid
        width="70px"
      ></Image>
      <Image
        className="payment-button rounded-pill"
        src="./images/paymentLogos/razorpay.jpg"
        fluid
        width="70px"
      ></Image>
      <Image
        className="payment-button rounded-pill"
        src="./images/paymentLogos/mastercard.png"
        fluid
        width="70px"
      ></Image>
      <Image
        className="payment-button rounded-pill"
        src="./images/paymentLogos/amazonPay.png"
        fluid
        width="70px"
      ></Image>
      <Image
        className="payment-button rounded-pill"
        src="./images/paymentLogos/stripe.png"
        fluid
        width="70px"
      ></Image>
    </div>
  )
}

export default PaymentMethods
