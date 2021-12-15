import React from 'react'
import { Image } from 'react-bootstrap'

const PaymentMethods = () => {
  return (
    <div>
      <Image
        className="payment-button rounded-pill"
        src="./logos/paymentLogos/paypal.png"
        fluid
        width="70px"
      ></Image>
      <Image
        className="payment-button rounded-pill"
        src="./logos/paymentLogos/visa.png"
        fluid
        width="70px"
      ></Image>
      <Image
        className="payment-button rounded-pill"
        src="./logos/paymentLogos/razorpay.jpg"
        fluid
        width="70px"
      ></Image>
      <Image
        className="payment-button rounded-pill"
        src="./logos/paymentLogos/mastercard.png"
        fluid
        width="70px"
      ></Image>
      <Image
        className="payment-button rounded-pill"
        src="./logos/paymentLogos/amazonPay.png"
        fluid
        width="70px"
      ></Image>
      <Image
        className="payment-button rounded-pill"
        src="./logos/paymentLogos/stripe.png"
        fluid
        width="70px"
      ></Image>
    </div>
  )
}

export default PaymentMethods
