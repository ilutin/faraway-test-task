import React from 'react'
import PropTypes from 'prop-types'
import { Card as AntCard } from 'antd'

const Card = ({ name }) => {
  console.log('Card')

  // eslint-disable-next-line react-perf/jsx-no-new-array-as-prop
  const actions = [<span key="more">Больше</span>]

  return <AntCard title={name} actions={actions} />
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Card
