import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ placeholder, type, onChange, minLength }) => (
  <input type={type} placeholder={placeholder} onChange={onChange} minLength={minLength} />
)

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  minLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  onChange: null,
  minLength: 2,
}

export default Input
