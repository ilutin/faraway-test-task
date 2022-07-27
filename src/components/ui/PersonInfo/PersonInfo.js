import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Row } from 'antd'
import { useTheme } from 'styled-components'
import { Empty } from 'components/ui'
import { selectPersonByName } from 'store/selectors'
import { PERSON_INFO_MAP } from 'helpers'
import PersonInfoCard from './PersonInfoCard/PersonInfoCard'

const PersonInfo = ({ name }) => {
  const theme = useTheme()
  const person = useSelector(state => selectPersonByName(state, name))

  if (!person) {
    return <Empty />
  }

  return (
    <Row gutter={theme.gutter} align="center" justify="center">
      {Object.entries(person).map(
        ([key, value]) =>
          PERSON_INFO_MAP[key] && (
            <PersonInfoCard key={key} name={name} title={key} value={value} />
          ),
      )}
    </Row>
  )
}

PersonInfo.propTypes = {
  name: PropTypes.node.isRequired,
}

export default PersonInfo
