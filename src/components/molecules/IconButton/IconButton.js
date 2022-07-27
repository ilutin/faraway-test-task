import React from 'react'
import PropTypes from 'prop-types'
import { Button, Input } from 'components/atoms'
import { IconButtonStyled } from './IconButton.styles'

const IconButton = ({ children, placeholder, onInputChange, isSelected }) => (
  <IconButtonStyled selected={isSelected}>
    <Button type="button">{children}</Button>
    <Input type="text" placeholder={placeholder} onChange={onInputChange} />
  </IconButtonStyled>
)

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  placeholder: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
}

IconButton.defaultProps = {
  placeholder: '',
  isSelected: false,
}

export default IconButton
