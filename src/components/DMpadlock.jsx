import { useGLTF } from '@react-three/drei';


const DMpadlock = () => {
    const dmpadlock = useGLTF('./DMpadlock/scene.gltf')


  return (
    <mesh>
        <primitive
            object={dmpadlock.scene}
        />
    </mesh>
    
  )
}


export default DMpadlock