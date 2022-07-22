import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'antd'
import { Card } from 'components'

const Cards = () => {
  console.log('Cards')
  const dispatch = useDispatch()
  const people = useSelector(state => state.people.people)

  const gutter = useMemo(
    () => [
      { xs: 8, sm: 16, md: 24, lg: 32 },
      { xs: 8, sm: 16, md: 24, lg: 32 },
    ],
    [],
  )

  useEffect(() => {
    dispatch({ type: 'FETCH_PEOPLE' })
  }, [dispatch])

  if (!people.length) {
    return (
      <Row justify="center" align="center">
        Список героев пуст
      </Row>
    )
  }

  return (
    <Row justify="center" align="center" gutter={gutter}>
      {people.map(person => (
        <Col xs={24} sm={12} md={8} lg={6} xl={6} key={person.name}>
          <Card name={person.name} />
        </Col>
      ))}
    </Row>
  )
}

export default Cards
