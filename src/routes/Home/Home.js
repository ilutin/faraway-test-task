import React from 'react'
import { Cards } from 'components/ui'
import { Toolbar } from 'components/organisms'
import { LayoutStyled, HeaderStyled, ContentStyled } from './Home.styles'

const Home = () => (
  <LayoutStyled>
    <HeaderStyled>
      <Toolbar />
    </HeaderStyled>
    <ContentStyled>
      <Cards />
    </ContentStyled>
  </LayoutStyled>
)

export default Home
