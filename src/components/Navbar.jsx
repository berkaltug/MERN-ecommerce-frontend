import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Container=styled.div``
const Wrapper=styled.div`
    padding : 10px 20px;
    display : flex;
    justify-content: space-between;
`

const Left=styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Center=styled.div`
    flex:1;
`
const Right=styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem=styled.div`
    font-size: 14px;
    cursor: pointer;
    margin: 0 1em;
`
const Language=styled.span`
    font-size:14px;
    cursor: pointer;
`
const SearchContainer=styled.div`
    border:1px solid grey;
    display: flex;
    align-items: center;
    margin: 0 1em;
`
const Input=styled.input`
border:none;
`
const Logo=styled.h1`
text-align: center;
`

const Navbar = () => {
  return (
    <Container>
       <Wrapper>
        <Left>
            <Language>En</Language>
            <SearchContainer>
                <Input/>
                <Search/>
            </SearchContainer>
        </Left>
        <Center>
            <Logo>Custom Shop</Logo>
        </Center>
        <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <Badge badgeContent={4} color='primary'>
                <ShoppingCartOutlined/>
            </Badge>
        </Right>
       </Wrapper>
    </Container>
  )
}

export default Navbar