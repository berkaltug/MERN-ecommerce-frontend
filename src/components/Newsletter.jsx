import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.CREAM};
  flex-direction: column;
  height:50vh;
`;

const Title = styled.h3`
 font-size: 3em;
 margin: 0.2em;
`;
const Desc = styled.p`
  font-size: 1.5em;
  font-weight: 400;
`;
const InputContainer = styled.div`
display:flex;
width: 50%;
height: 2em;

`;
const Input = styled.input`
border:none;
flex:8;
`;

const Button = styled.button`
flex:1;
background-color: ${colors.BLACK};
color:${colors.CREAM};
font-weight: 300;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get update from your favourite products !</Desc>
      <InputContainer>
        <Input placeholder="Enter Email"/>
        <Button>Join</Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
