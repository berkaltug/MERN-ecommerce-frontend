import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants/colors'

const Container=styled.div`
    background-color:${colors.COFFEE};
    color:beige;
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const Announcement = () => {
  return (
    <Container>
        Hurry Up ! Take A Closer Look To Free Shipping Items
    </Container>
  )
}

export default Announcement