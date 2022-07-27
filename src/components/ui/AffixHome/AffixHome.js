import React from 'react'
import { Link } from 'react-router-dom'
import { Home } from '@styled-icons/fluentui-system-filled/Home'
import { routes } from 'config/routes'
import { AffixContainerStyled } from './AffixHome.styles'

const AffixHome = () => (
  <AffixContainerStyled>
    <Link to={routes.root()}>
      <Home size={28} />
    </Link>
  </AffixContainerStyled>
)

export default AffixHome
