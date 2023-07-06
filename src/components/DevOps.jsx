import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import DMastro from './DMastro'

const Webdesign = () => {
  return (
    <Canvas camera={{fov:30}}>
      <Stage environment="forest" intensity={0.2}>
        <DMastro/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default Webdesign