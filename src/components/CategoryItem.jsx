import React from "react";
import styled from "styled-components";
import {colors} from "../constants/colors"

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 1em;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
font-size: 3em;
background-color: ${colors.CREAM};
color: ${colors.BLACK};
padding: 0.25em;
`;

const Button = styled.button`
  padding: 1em;
  border: none;
  background-color: ${colors.BLACK};
  color: ${colors.CREAM};
  cursor: pointer;
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.image} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
