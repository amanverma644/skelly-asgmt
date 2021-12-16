import React from 'react'
import { Image } from 'react-bootstrap'
import DHL from '../assets/images/deliveryLogos/DHL.png'
import DPD from '../assets/images/deliveryLogos/DPD.png'
import fedEx from '../assets/images/deliveryLogos/fedEx.png'
import inPost from '../assets/images/deliveryLogos/inPost.png'

const PaymentMethods = () => {
  return (
    <div>
      <Image
        className="delivery-button rounded-pill"
        src={fedEx}
        fluid
        width="70px"
      ></Image>
      <Image
        className="delivery-button rounded-pill"
        src={DHL}
        fluid
        width="70px"
      ></Image>
      <Image
        className="delivery-button rounded-pill"
        src={inPost}
        fluid
        width="70px"
      ></Image>
      <Image
        className="delivery-button rounded-pill"
        src={DPD}
        fluid
        width="70px"
      ></Image>
    </div>
  )
}

export default PaymentMethods
