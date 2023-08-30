import styled from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Works from "./components/Works"
import Who from "./components/Who"
import Navbar from "./components/Navbar"



const Container = styled.div`
      height: 100vh;
      scroll-snap-types: y mandatory;
      scroll-behavior: smoothl;
      overflow-y: auto;
      scrollbar-width: none;
      color: white;
      background: url("./img/fondo-2.jpg");
      background-size: cover;
      &::-webkit-scrollbar{
        display: none;
      }

`
    



function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App
