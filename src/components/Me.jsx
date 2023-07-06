import { Canvas } from '@react-three/fiber';
import React from 'react'
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import DMrocket from './DMrocket';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1250px;
  display: flex;
  justify-content: space-between;
`

const LMe = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width:768px) {
    display: none;
        
  }
`;

const RMe = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 30px;
  gap: 20px;

  @media only screen and (max-width:768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width:768px) {
    font-size: 65px;
        
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

  @media only screen and (max-width:768px) {
    text-align: center;
    justify-content: center;
        
  }
`;

const Button = styled.button`
  background-color: #9A9A9A;
  color: #ffffff;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Me = () => {
  return (
    <Section>
      <Container>
        <LMe> 
          <Canvas camera={{fov:3, position:[5,5,5]}} >
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[3,2,1]}/>
            <perspectiveCamera makeDefault position={[5,5,5]}/>
            <DMrocket/>
          </Canvas>
        </LMe>
        <RMe>
          <Title>Innovative Mind. Creative Soul. Hardworking Spirit.</Title>
            <WorkWMe>
              <Slogan>Innovate. Deliver. Excel. Unleashing the power of intelligent web development.</Slogan>
              <Button>See My Works</Button>
            </WorkWMe>
        </RMe>
      </Container>
    </Section>
  )
}

export default Me