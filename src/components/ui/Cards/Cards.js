import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'antd'
import { useTheme } from 'styled-components'
import { Card, Pagination, Empty } from 'components/ui'
import { selectPeople, selectPeopleLoading } from 'store/selectors'
import { sagaActions } from 'store/sagas/sagaActions'
import CardsSkeleton from './CardsSkeleton/CardsSkeleton'

const Cards = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const people = useSelector(selectPeople)
  const isLoading = useSelector(selectPeopleLoading)

  useEffect(() => {
    if (!people.length) {
      dispatch({ type: sagaActions.FETCH_PEOPLE, payload: { page: 1 } })
    }
  }, [])

  if (isLoading) {
    return <CardsSkeleton />
  }

  if (!people.length) {
    return <Empty withLink={false} />
  }

  return (
    <Row justify="center" align="center" gutter={theme.gutter}>
      {people.map(person => (
        <Col xs={24} sm={12} md={12} lg={8} xl={6} key={person.name}>
          <Card name={person.name} dob={person.birth_year} eyeColor={person.eye_color} />
        </Col>
      ))}

      <Col span={24}>
        <Pagination />
      </Col>
    </Row>
  )
}

export default Cards
