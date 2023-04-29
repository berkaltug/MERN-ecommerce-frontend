import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { colors } from "../constants/colors";

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
`;

const TopButton = styled.button`
  padding: 1.25em;
  font-weight: 600;
  border: none;
  background-color: ${colors.COFFEE};
  cursor: pointer;
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  margin: 0 1em;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5em;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 200px;
  height: 260px;
`;
const ProductName = styled.span`
  margin: 1em 0em;
`;
const ProductId = styled.span`
  margin: 1em 0em;
`;

const ProductColor = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  margin: 1em 0em;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
  margin: 1em 0em;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4em;
`;

const ProductAmount = styled.div`
  font-size: 1.3em;
  font-weight: 400;
`;

const ProductPrice = styled.div`
  font-size: 1.5em;
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid ${colors.BROWN};
  padding: 0.5em;
  height: fit-content;
  border-radius: 10px;
`;

const SummaryTitle = styled.h1`
  font-weight: 400;
  font-size: 1.5em;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5em 0em;
  font-weight: ${(props) => props.fontWeight};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 1.25em;
  border: none;
  font-weight: 600;
  background-color: ${colors.COFFEE};
  cursor: pointer;
`;
const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Basket</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton>Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://purepng.com/public/uploads/large/purepng.com-dress-shirt-detachable-collarbutton-front-shirtgarmentdressshirtfullmensdetachable-1421526307026nyc1s.png" />
                <Details>
                  <ProductName>
                    <b>Product :</b> Classy Shirt
                  </ProductName>
                  <ProductId>
                    <b>ID :</b> 234679313
                  </ProductId>
                  <ProductColor color="lightgrey" />
                  <ProductSize>
                    <b>Size :</b> S
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>300 ₺</ProductPrice>
              </PriceDetail>
            </Product>
            <hr />
            <Product>
              <ProductDetail>
                <Image src="https://purepng.com/public/uploads/large/purepng.com-printed-dress-shirtbutton-front-shirtgarmentdressshirtprinted-142152630843552gxz.png" />
                <Details>
                  <ProductName>
                    <b>Product :</b> Fancy Shirt
                  </ProductName>
                  <ProductId>
                    <b>ID :</b> 234679469
                  </ProductId>
                  <ProductColor color="lightgrey" />
                  <ProductSize>
                    <b>Size :</b> S
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>270 ₺</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>570 $</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>20 ₺</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-20 ₺</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem fontWeight={600}>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>570 ₺</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
