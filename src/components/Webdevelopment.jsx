import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import DMcomputer from './DMcomputer'

const Webdevelopment = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <DMcomputer/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default Webdevelopment