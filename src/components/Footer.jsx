import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  padding: 2em;
`;

const Center = styled.div`
  flex: 1;
  padding: 2em;
`;

const Right = styled.div`
  flex: 1;
  padding:2em;
`;

const Logo = styled.h4`
  font-size: 1.5em;
`;
const Desc = styled.div`
margin-top: 0.75em;
margin-bottom: 0.75em;
`;
const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const SocialIcon = styled.div`
  width: 2em;
  height: 2em;
  color:whitesmoke;
  background-color: #${props=>props.bgColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5em;
`;

const Title=styled.h4`
font-size: 1.25em;
margin-bottom:0.25em;
`

const List=styled.ul`
margin:0;
padding:0;
list-style: none;
display: flex;
flex-wrap: wrap;
`

const ListItem=styled.li`
  width:50%;
  margin-bottom:0.5em;
`
const ContactItem=styled.div`
display:flex;
align-items: center;
margin-bottom: 1em;
`
const Payment=styled.img``

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>CUSTOM SHOP</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          obcaecati, repudiandae neque optio maiores dolor eum autem soluta
          quasi sit?
        </Desc>
        <SocialContainer>
          <SocialIcon bgColor="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon bgColor="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon bgColor="e4405f">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Man Products</ListItem>
          <ListItem>Woman Products</ListItem>
          <ListItem>Children Products</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Cart</ListItem>
          <ListItem>Wishlist</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room/>
          345th Street , California , USA 
        </ContactItem>
        <ContactItem>
          <Phone/>
          +1 234 567 89 00
        </ContactItem>
        <ContactItem>
          <MailOutline/>
          berkaltug96@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
