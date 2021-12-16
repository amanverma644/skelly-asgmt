import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import { PayPalButton } from 'react-paypal-button-v2'
import amazonPay from '../assets/images/paymentLogos/amazonPay.png'
import masterCard from '../assets/images/paymentLogos/masterCard.png'
import upi from '../assets/images/paymentLogos/upi.png'
import razorpay from '../assets/images/paymentLogos/razorpay.jpg'
import stripe from '../assets/images/paymentLogos/stripe.png'
import visa from '../assets/images/paymentLogos/visa.png'

const PaymentMethods = () => {
  const [successPay, setSuccessPay] = useState(false)
  const [sdkReady, setSdkReady] = useState(false)

  useEffect(() => {
    const addPayPalScript = () => {
      //clientID should kept in .env file
      const clientID =
        'AYMkO4cmLudgyYwQ1Q44h-rcZUnL7_1wbLgRRX9AzR9CkXQelPuNft5u_nli93ZjCCC5N3AkU42lxy27'
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientID}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }
    if (!successPay) {
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }
  }, [successPay])

  const successPaymentHandler = () => {
    setSuccessPay(true)
  }

  return (
    <div className="my-3">
      {sdkReady && (
        <PayPalButton amount="1198" onSuccess={successPaymentHandler} />
      )}
      <Image
        className="payment-button rounded-pill"
        src={upi}
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
        src={masterCard}
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
