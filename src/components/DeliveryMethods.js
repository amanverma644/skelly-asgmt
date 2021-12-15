import React from 'react'
import { Image } from 'react-bootstrap'

const PaymentMethods = () => {
  return (
    <div>
      <Image
        className="delivery-button rounded-pill"
        src="./images/deliveryLogos/fedEx.png"
        fluid
        width="70px"
      ></Image>
      <Image
        className="delivery-button rounded-pill"
        src="./images/deliveryLogos/DHL.png"
        fluid
        width="70px"
      ></Image>
      <Image
        className="delivery-button rounded-pill"
        src="./images/deliveryLogos/inPost.png"
        fluid
        width="70px"
      ></Image>
      <Image
        className="delivery-button rounded-pill"
        src="./images/deliveryLogos/DPD.png"
        fluid
        width="70px"
      ></Image>
    </div>
  )
}

export default PaymentMethods
