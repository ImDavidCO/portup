import { useGLTF } from '@react-three/drei';


const DMastro = () => {
    const dmastro = useGLTF('./DMastro/scene.gltf')


  return (
    <mesh>
        <primitive
            object={dmastro.scene}
        />
    </mesh>
    
  )
}


export default DMastro