import React, { Suspense, useState } from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Modal
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

// 3D Loader
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"

const SlideCard = () => {
  // Modal 
  const [open, setOpen] = useState(false)

  const settings = {
    // dots: true,
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
                  <button style={{cursor:"pointer"}} onClick={() => setOpen(true)} className='btn-primary'>Visit Collections</button>
                  
                  {/* MODAL */}
                  <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        style={{marginBottom:"5rem"}}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="soft"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose
            variant="soft"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              borderRadius: '50%',
              bgcolor: 'transparent',
            }}
          />
          <Typography
            // component="h2"
            id="modal-title"
            level="h4"
            textColor="orange"
            fontWeight="bold"
            fontSize="2rem"
            
          >
            Slow down Speed Racer!
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
          This item's collections is coming soon!
          </Typography>
        </Sheet>
      </Modal>

                </div>
                <div className='right'>
                  {/* INPUT 3D HERE */}
                  <Canvas
                  camera={{position:[-9,3,10], fov:23}} 
                  colorManagement
                  shadows
      className="canvas3d">
                    <directionalLight 
                    castShadow
                    intensity={2} 
                    />
                    <ambientLight intensity={0.3}/>
                    <Suspense fallback={null}>
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
