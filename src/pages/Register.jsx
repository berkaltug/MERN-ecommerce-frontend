import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=800")
      no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 2em;
  background-color: ${colors.COFFEE};
`;

const Title = styled.h1``;

const Form = styled.form`
display:flex;
flex-wrap:wrap;
`;

const Input = styled.input`
flex:1;
min-width:40%;
margin:0.5em 1em;
padding:0.75em;
`;

const Agreement = styled.p`
  font-size: 14px;
`;

const Button = styled.button`
padding:0.5em;
border:none;
width:40%;
background-color:${colors.CREAM};
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>REGISTER</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating account , I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>.
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
