import React from "react";
import styled from "styled-components"
import Navbar from "./Navbar";


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1000px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`

const Right = styled.div`
    flex: 3;
    position: relative;
    

   
`
const Hi_ = styled.h3`
font-size: 31px;
color: orange;
`

const Title = styled.h1`
    font-size: 52px;
`
const Text = styled.text`
    font-size: 33px;
`

const Img = styled.img`
width: 500px;
height: 500px; 
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@keyframes animate {
  to{
      transform: translateY(20px)
`


const Hero = () => {
    return(
        <Section>
            <Navbar/>
            <Container>
                <Left>
                    <Hi_></Hi_>
                    <Title>Deep Space</Title>
                    <Text>Astronaut journey and the universe</Text>
                </Left>
                <Right>
                    {/*3d model */}
                    <Img src="./img/astro.png" ></Img>
                </Right>
           </Container>
        </Section>
    )
}

export default Hero