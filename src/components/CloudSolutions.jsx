import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import DMserver from './DMserver'

const Webdesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <DMserver/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default Webdesign