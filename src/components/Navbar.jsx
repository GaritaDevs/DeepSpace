import React from "react";
import styled from "styled-components"

const Section = styled.div`
    display: flex;
    justify-content: center;
   
`

const Container = styled.div`
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const Links = styled.div`
    display: flex;
    aling-items: center;
    gap: 50px;

`;
const Logo = styled.img`
    width: 70px;
    heigt: 70px;
`;
const List = styled.ul`
    display: flex;
    gap: 50px;
    align-items: center;
    list-style: none;
`;
const ListItem = styled.li`
    cursor: pointer;
    color: white;
`;

const Icons = styled.div`
    gap: 40px;
`;

const Button = styled.button`
    width:100px;
    padding: 10px;
    color: white;
    background-color: #9305d5;
    border: none;
    border-radius: 5px;
    cursor: pointer
`;

const Navbar = () => {
    return(
        <Section>
            <Container>
                <Links>
                <Logo src="./img/logoPortfolio-21.png"/>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Studio</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
                </Links>
                <Icons>
                    <Button>Learn more</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar