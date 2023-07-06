import { useGLTF } from '@react-three/drei';




const DMcube = () => {
    const dmcube = useGLTF('./DMcube/scene.gltf')


  return (
    <mesh>
        <primitive
            object={dmcube.scene}
        />
    </mesh>
    
  )
}

export default DMcube
