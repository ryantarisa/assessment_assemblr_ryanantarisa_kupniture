import React from "react"
import FeaturedCard from "./FeaturedCard"
import "./style.css"

const Featured = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-fire'></i>
            <h1>Featured</h1>
          </div>
          <FeaturedCard  productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default Featured
