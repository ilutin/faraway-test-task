import React from 'react'
import PropTypes from 'prop-types'
import { CardDescriptionStyled, SkeletonStyled } from './CardDescription.styles'

const paragraph = { rows: 2 }

const CardDescription = ({ dob, eyeColor }) => (
  <CardDescriptionStyled>
    <div>
      Date of birth: <span>{dob}</span>
    </div>
    <div>
      Eye color: <span>{eyeColor}</span>
    </div>
    <SkeletonStyled title={false} paragraph={paragraph} />
  </CardDescriptionStyled>
)

CardDescription.propTypes = {
  dob: PropTypes.string.isRequired,
  eyeColor: PropTypes.string.isRequired,
}

export default CardDescription
