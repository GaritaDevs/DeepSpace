import React from "react";
import styled from "styled-components"


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1000px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;

`

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
   
`
const About = styled.h3`
font-size: 51px;
`

const About1 = styled.h1`
    font-size: 22px;
    color: #9305d5;
`
const About2 = styled.text`
    font-size: 21px;
`



const Who = () => {
    return(
        <Section>
            <Container>
                <Left>
                    {/*3d model */}
                
                </Left>
                <Right>
                    <About>Think outside the box</About>
                    <About1>Who we Are</About1>
                    <About2>We talk about the universe</About2>
                </Right>
           </Container>
        </Section>
    )
}

export default Who