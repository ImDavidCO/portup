import React from 'react'
import styled from 'styled-components'


const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width:768px) {
        width: 100%;
        
    }
`
const Container = styled.div`
    width: 1250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    @media only screen and (max-width:768px) {
        width: 100%;
        padding: 10px;
        
    }
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Logo = styled.img`
    height: 120px;    
`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width:768px) {
        display: none;
        
    }
`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Icon = styled.img`
    width: 25px;
    cursor: pointer;

`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #9A9A9A;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;


const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo src="./img/logo.png"/>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>About Me</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contact Me</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src="./img/search.png"/>
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar