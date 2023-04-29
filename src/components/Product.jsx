import {
  FavoriteOutlined,
  Search,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";


const Info = styled.div`
  position:absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.2);
  transition: all 0.3s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.CREAM};
  position:relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  position:absolute;
  border-radius: 50%;
  height: 10em;
  width: 10em;
  background-color: ${colors.BROWN};
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Icon = styled.div`
display:flex;
align-items:center;
justify-content: center;
border-radius: 50%;
background-color: ${colors.CREAM};
width: 2em;
height: 2em;
margin: 1em;
transition: all 0.3s ease-out;

&:hover{
 transform: scale(1.1);
 background-color: ${colors.COFFEE};
}
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.image} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
