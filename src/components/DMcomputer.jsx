import { useGLTF } from '@react-three/drei';



const DMcomputer = () => {
    const dmcomputer = useGLTF('./DMcomputer/scene.gltf')


  return (
    <mesh>
        <primitive
            object={dmcomputer.scene}
        />
    </mesh>
    
  )
}


export default DMcomputer