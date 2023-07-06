import { useGLTF } from '@react-three/drei';


const DMrocket = () => {
    const dmrocket = useGLTF('./DMrocket/scene.gltf')


  return (
    <mesh>
        <primitive
            object={dmrocket.scene}
        />
    </mesh>
    
  )
}


export default DMrocket
