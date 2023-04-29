import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1``;
const Filter = styled.div``;
const FilterText=styled.span`
font-size: 1.25em;
font-weight: 600;
margin-right: 0.4em;
`;

const Select=styled.select`
margin-right:1em;
padding:0.5em;
`;

const Option=styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Shirts</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products</FilterText>
            <Select>
                <Option disabled selected>Color</Option>
                <Option>Blue</Option>
                <Option>Grey</Option>
                <Option>Purple</Option>
                <Option>White</Option>
                <Option>Orange</Option>
                <Option>Black</Option>
            </Select>
            <Select>
                <Option disabled selected>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
            </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products</FilterText>
            <Select>
                <Option selected>Newest</Option>
                <Option>Price Asc</Option>
                <Option>Price Desc</Option>
            </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default ProductList;
