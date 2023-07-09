import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import Map from './Map';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: space-between;
  gap: 50px;
`;

const LContact = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width:768px) {
    justify-content: center;    
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width:768px) {
    width: 300px;
    
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border-color: white;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #9A9A9A;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 20px;
`;

const RContact = styled.div`
  flex: 1;

  @media only screen and (max-width:768px) {
    display: none;

        
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v73akb9",
        "template_lubgtln",
        ref.current,
        "SNdoDXuwNzkDsAdBb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section id='contact'>
      <Container>
        <LContact>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" autoComplete= "name"/>
            <Input placeholder="Company" name="company" autoComplete="off"/>
            <Input placeholder="Email" name="email" autoComplete="email"/>
            <TextArea placeholder="Write Your Message" name="message" autoComplete="off" rows={6}/>
            <Button type="submit">Send</Button>
            {success && 
              "Your message has been sent. I'll get back you soon"}
          </Form>
        </LContact>
        <RContact>
          <Map/>
        </RContact>
      </Container>
    </Section>
  )
}

export default Contact