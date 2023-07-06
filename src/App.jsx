import styled from "styled-components"
import Works from "./components/Works"
import Me from "./components/Me"
import Hero from "./components/Hero"
import Contact from "./components/Contact"

const Stcont = styled.div`
  height: 100vh;
  background-color: #898887;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth; 
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpg");
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Stcont>
      <Hero/>
      <Me/>
      <Works/>
      <Contact/>
    </Stcont>
  )
}

export default App
