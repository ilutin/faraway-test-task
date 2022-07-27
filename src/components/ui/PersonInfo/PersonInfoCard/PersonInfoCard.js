import React, { useMemo, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Col, Input } from 'antd'
import { SaveEdit } from '@styled-icons/fluentui-system-filled/SaveEdit'
import { Edit } from '@styled-icons/fluentui-system-filled/Edit'
import { useDispatch } from 'react-redux'
import { changePersonData } from 'store/reducers/peopleReducer'
import { PERSON_INFO_MAP } from 'helpers'
import { CardStyled, StatisticStyled } from './PersonInfoCard.styles'

const PersonInfoCard = ({ name, title, value }) => {
  const dispatch = useDispatch()
  const [isEditable, setIsEditable] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  const onActionClick = useCallback(() => {
    if (isEditable) {
      dispatch(
        changePersonData({
          name,
          title,
          value: inputValue,
        }),
      )
    }

    setIsEditable(!isEditable)
  }, [inputValue, isEditable, name, title, dispatch])

  const actions = useMemo(
    () => [
      <span key="edit">
        {isEditable ? (
          <SaveEdit size={24} onClick={onActionClick} />
        ) : (
          <Edit size={24} onClick={onActionClick} />
        )}
      </span>,
    ],
    [isEditable, onActionClick],
  )

  const onInput = useCallback(event => {
    setInputValue(event.target.value)
  }, [])

  return (
    <Col xs={24} sm={12} md={12} lg={8} xl={8}>
      <CardStyled actions={actions}>
        {isEditable ? (
          <Input addonBefore={PERSON_INFO_MAP[title]} value={inputValue} onInput={onInput} />
        ) : (
          <StatisticStyled title={PERSON_INFO_MAP[title]} value={value} />
        )}
      </CardStyled>
    </Col>
  )
}

PersonInfoCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default React.memo(PersonInfoCard)
