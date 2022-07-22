import React from 'react'
import { Cards } from 'components'
import { LayoutStyled, HeaderStyled, ContentStyled } from './Home.styles'

const Home = () => (
  <LayoutStyled>
    <HeaderStyled>Home Header</HeaderStyled>
    <ContentStyled>
      <Cards />
    </ContentStyled>
  </LayoutStyled>
)

export default Home
