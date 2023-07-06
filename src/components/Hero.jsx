import React from 'react'
import styled from "styled-components"
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width:768px) {
        height: 200vh;
        
    }

`

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1250px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width:768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }
`

const LHero = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 30px;
  gap: 20px;

  @media only screen and (max-width:768px) {
    flex: 1;
    align-items: center;
        
  }
`;
const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width:768px) {
    font-size: 65px;
    text-align: center;
        
  }
`;
const WorkWMe = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 10px;

  @media only screen and (max-width:768px) {
    padding: 20px;
    text-align: center;
    align-items: center;
  }
`;
const Slogan = styled.p`
  font-size: 24px;
`;
const Button = styled.button`
  background-color: #9A9A9A;
  color: #ffffff;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const RHero = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width:768px) {
        flex: 1;
        width: 100%;
        
    }
`;

const Img = styled.img`
  width: 400px;
  height: 300px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width:768px) {
        width: 300px;
        height: 300px;
        
    }

  @keyframes animate {
    to{
      transform: translateY(10px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <LHero>
          <Title>Crafting digital experiences.</Title>
          <WorkWMe>
            <Slogan>Unlock your digital potential with my web development expertise.</Slogan>
            <Button>Learn More</Button>
          </WorkWMe>
        </LHero>
        <RHero>
          <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[3,2,1]}/>
            <Sphere args={[1,80,180]} scale={3}>
              <MeshDistortMaterial
                color="#867e7e"
                attach="material"
                distort={0.2}
                speed={2}

              />
            </Sphere>  
          </Canvas>
          <Img src="./img/space.png"/>
        </RHero>
      </Container>
    </Section>
  )
}

export default Hero