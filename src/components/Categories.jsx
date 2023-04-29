import React from 'react'
import styled from 'styled-components'
import { categoryItems } from '../data'
import CategoryItem from './CategoryItem'

const Container=styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;
`

const Categories = () => {
  return (
    <Container>
        {categoryItems.map(item=>(
            <CategoryItem key={item.id} item={item}/>
        ))}
    </Container>
  )
}

export default Categories