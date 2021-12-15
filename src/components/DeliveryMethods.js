import React from 'react'
import { Image } from 'react-bootstrap'

const PaymentMethods = () => {
  return (
    <div>
      <Image
        className="delivery-button rounded-pill"
        src="./logos/deliveryLogos/fedEx.png"
        fluid
        width="70px"
      ></Image>
      <Image
        className="delivery-button rounded-pill"
        src="./logos/deliveryLogos/DHL.png"
        fluid
        width="70px"
      ></Image>
      <Image
        className="delivery-button rounded-pill"
        src="./logos/deliveryLogos/inPost.png"
        fluid
        width="70px"
      ></Image>
      <Image
        className="delivery-button rounded-pill"
        src="./logos/deliveryLogos/DPD.png"
        fluid
        width="70px"
      ></Image>
    </div>
  )
}

export default PaymentMethods
