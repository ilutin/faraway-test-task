import React from 'react'
import { SearchButton } from 'components/ui'
import { ToolbarStyled, ToolbarItemStyled } from './Toolbar.styles'

const Toolbar = () => (
  <ToolbarStyled>
    <ToolbarItemStyled>
      <SearchButton />
    </ToolbarItemStyled>
  </ToolbarStyled>
)

export default Toolbar
