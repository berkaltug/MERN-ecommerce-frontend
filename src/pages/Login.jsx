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
    url("https://images.pexels.com/photos/3965551/pexels-photo-3965551.jpeg?auto=compress&cs=tinysrgb&w=800")
      no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 2em;
  background-color: ${colors.COFFEE};
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 0.5em 0em;
  padding: 0.75em;
`;

const Button = styled.button`
  padding: 0.5em;
  border: none;
  width: 40%;
  margin:0.5em 0em;
  background-color: ${colors.CREAM};
`;

const Link = styled.a`
  font-weight: 300;
  text-decoration: underline;
  cursor: pointer;
  margin: 0.5em 0em;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>Forgot my password</Link>
          <Link>Create an account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
