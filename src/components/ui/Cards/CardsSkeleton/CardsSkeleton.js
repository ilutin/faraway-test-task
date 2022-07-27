/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Col, Row } from 'antd'
import { useTheme } from 'styled-components'
import { CardStyled } from './CardsSkeleton.styles'

const CardsSkeleton = () => {
  const theme = useTheme()

  return (
    <Row justify="center" align="center" gutter={theme.gutter}>
      {Array.from({ length: 10 }).map((_, i) => (
        <Col xs={24} sm={12} md={12} lg={8} xl={6} key={i}>
          <CardStyled loading />
        </Col>
      ))}
    </Row>
  )
}

export default CardsSkeleton
