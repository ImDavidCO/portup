import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import DMcube from './DMcube'


const Webdesign = () => {
  return (
    <Canvas>
      <Stage environment="apartment" intensity={0.6} camera={{fov:5, position:[1,1,1]}}>
        <DMcube/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>


  );
};

export default Webdesign