import React from "react"
import Home from "../components/MainPage/Home"
import Featured from "../components/featured/Featured"


const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <Featured productItems={productItems} addToCart={addToCart} />
    </>
  )
}

export default Pages
