import React, { Suspense } from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// 3D Loader
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"


const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }

  return (
    <>
      <Slider {...settings}>
      {Sdata.map((value, index) => {
          return (
            <>
              <div className='card box d_flex'>
                <div className='cardText left'>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  {/* INPUT 3D HERE */}
                  <Canvas className="canvas3d">
                    <Suspense fallback={null}>
                     <ambientLight/>
                      {value.cover}
                      <OrbitControls
                      enablePan={true}
                      enableZoom={true}
                      enableRotate={true}
                      autoRotate={true}
                      />
                    </Suspense>
                  </Canvas>
                </div>
              </div>
            </>
          )
 })}
      </Slider>
    </>
  )
}

export default SlideCard
