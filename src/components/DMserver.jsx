import { useGLTF } from '@react-three/drei';


const DMserver = () => {
    const dmserver = useGLTF('./DMserver/scene.gltf')


  return (
    <mesh>
        <primitive
            object={dmserver.scene}
        />
    </mesh>
    
  )
}


export default DMserver