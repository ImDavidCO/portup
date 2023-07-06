import React, { useState } from 'react'
import styled from 'styled-components'
import Webdesign from './Webdesign';
import Webdevelopment from './Webdevelopment';
import CloudSolutions from './CloudSolutions';
import DevOps from './DevOps';
import Pentesting from './Pentesting';

const data = [
  "Web Design",
  "Web Development",
  "Cloud Solutions",
  "DevOps",
  "Pentesting",
];


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1250px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width:768px) {
    width: 100%;
    flex-direction: column;
        
  }
`;

const LWorks = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width:768px) {
    padding: 20px; 
    justify-content: center;
    
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 69px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 2px white;
  position: relative;

  @media only screen and (max-width:768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;

        
  }
  
  ::after{
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover{
    ::after{
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to{
          width: 100%;
        }
      }
    }
  }
`;

const RWorks = styled.div`
  flex: 1;
  position: relative;
  align-items: center;
`;

const Works = () => {
  const [work,setWork] = useState("Web Design")
  return (<Section>
    <Container>
      <LWorks>
        <List>
          {data.map((item) => (
            <ListItem key={item} text={item} onClick={()=>setWork(item)}>
              {item}
            </ListItem>
            ))}
        </List>
      </LWorks>
      <RWorks>
        {work === "Web Design" ? (
          <Webdesign/>
        ) : work === "Web Development" ? (
          <Webdevelopment/>
        ) : work === "Cloud Solutions" ? (
          <CloudSolutions/>
        ) : work === "DevOps" ? (
          <DevOps/>
        ) : (
          <Pentesting/>
        )}
      </RWorks>
    </Container>
  </Section>
  )
}

export default Works