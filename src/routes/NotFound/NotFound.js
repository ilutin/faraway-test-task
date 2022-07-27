import React from 'react'
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'
import { routes } from 'config/routes'
import { NotFoundStyled } from './NotFound.styles'

const NotFound = () => (
  <NotFoundStyled>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to={routes.root()}>
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  </NotFoundStyled>
)

export default NotFound
