import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { colors } from "../constants/colors";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 2em;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0em 1em;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 1em 0em;
`;
const Price = styled.span`
  font-size: 2em;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin: 1.25em 0em;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 1.25em;
  font-weight: 300;
  margin: 0em 0.25em;
`;
const FilterColor = styled.div`
  width: 1.25em;
  height: 1.25em;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0em 0.75em;
  cursor: pointer;
`;
const FilterSize = styled.select`
  padding: 0.3em;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin: 1.5em 0em;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5em;
  height: 1.5em;
  border-radius: 10%;
  border: 1px solid ${colors.COFFEE};
`;
const Button = styled.button`
  padding: 0.75em;
  border: 2px solid ${colors.COFFEE};
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
  }
`;
const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://purepng.com/public/uploads/large/purepng.com-dress-shirt-detachable-collar-greenbutton-front-shirtgarmentdressshirtfullmensdetachable-1421526307122tzyuu.png" />
        </ImageContainer>
        <InfoContainer>
          <Title>Classy Shirt</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            accusamus, iusto laudantium exercitationem vitae recusandae dolores
            provident repudiandae atque maiores iure tenetur ipsam deserunt
            cupiditate architecto in assumenda. Mollitia, omnis.
          </Desc>
          <Price>250 ₺</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="green" />
              <FilterColor color="grey" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
