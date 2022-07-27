import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { CardStyled, MetaStyled } from './Card.styles'
import CardDescription from './CardDescription/CardDescription'

const Card = ({ name, dob, eyeColor }) => {
  const actions = useMemo(
    () => [
      <Link key={`action-${name}`} to={`people/${name}`}>
        <span key="more">More</span>
      </Link>,
    ],
    [name],
  )

  return (
    <CardStyled actions={actions}>
      <MetaStyled title={name} description={<CardDescription dob={dob} eyeColor={eyeColor} />} />
    </CardStyled>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  eyeColor: PropTypes.string.isRequired,
}

export default React.memo(Card)
