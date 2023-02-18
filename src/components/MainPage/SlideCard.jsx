import React, { Suspense, useRef } from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


// 3D Loader
import { Model1 } from "../assets/furniture/Furniture1"
import { Model2 } from "../assets/furniture/Furniture2"
import { Model3 } from "../assets/furniture/Furniture3"
import { Model4 } from "../assets/furniture/Furniture4"
import {Canvas} from "@react-three/fiber"
import {OrbitControls, useGLTF} from "@react-three/drei"


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
            <>
              <div className='card box d_flex'>
                <div className='cardText left'>
                  <h1>The Sanctuary</h1>
                  <p> <i>The Sanctuary</i> sofa will be your home’s comfy oasis. An eye-catcher that reflects your personality and style. Great to sit, lie down and hang out on.</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  {/* INPUT 3D HERE */}
                  <Canvas className="canvas3d">
                    <Suspense fallback={null}>
                     <ambientLight/>
                      <Model1/>
                      <OrbitControls
                      enablePan={true}
                      // enableZoom={true}
                      enableRotate={true}
                      autoRotate={true}
                      />
                    </Suspense>
                  </Canvas>
                  {/* <img src={value.cover} alt='' /> */}
                </div>
              </div>
            </>

            <>
              <div className='card box d_flex'>
                <div className='cardText left'>
                  <h1>Yggdrasil</h1>
                  <p> <i>Yggdrasil's</i> clean design and durable material make them easy to use – and they’re also made of layer-glued wood that minimizes waste during production.</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  {/* INPUT 3D HERE */}
                  <Canvas className="canvas3d">
                    <Suspense fallback={null}>
                     <ambientLight/>
                      <Model2/>
                      <OrbitControls
                      enablePan={true}
                      // enableZoom={true}
                      enableRotate={true}
                      autoRotate={true}
                      />
                    </Suspense>
                  </Canvas>
                  {/* <img src={value.cover} alt='' /> */}
                </div>
              </div>
            </>

            <>
              <div className='card box d_flex'>
                <div className='cardText left'>
                  <h1>Sienna</h1>
                  <p>Bar stools in the <i>Sienna</i> series offer cushiony comfort and many cover options, like this one in stylish beige leather.</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  {/* INPUT 3D HERE */}
                  <Canvas className="canvas3d">
                    <Suspense fallback={null}>
                     <ambientLight/>
                      <Model3/>
                      <OrbitControls
                      enablePan={true}
                      enableZoom={true}
                      enableRotate={true}
                      autoRotate={true}
                    
                      />
                    </Suspense>
                  </Canvas>
                  {/* <img src={value.cover} alt='' /> */}
                </div>
              </div>
            </>
           
            <>
              <div className='card box d_flex'>
                <div className='cardText left'>
                  <h1>Mammut</h1>
                  <p>This easy chair makes us believe in love at first sight, with its clean Scandinavian lines and airy expression. Smart production minimizes environmental impact and price – and maximizes acessibility!</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  {/* INPUT 3D HERE */}
                  <Canvas className="canvas3d">
                    <Suspense fallback={null}>
                     <ambientLight/>
                      <Model4/>
                      <OrbitControls
                      enablePan={true}
                      // enableZoom={true}
                      enableRotate={true}
                      autoRotate={true}
                      />
                    </Suspense>
                  </Canvas>
                  {/* <img src={value.cover} alt='' /> */}
                </div>
              </div>
            </>
      </Slider>
    </>
  )
}

export default SlideCard
