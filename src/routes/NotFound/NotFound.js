import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from 'config/routes'

const NotFound = () => (
  <>
      <h1>Страница не найдена</h1>
      <Link to={routes.root()}>Перейти на главную</Link>
  </>
)

export default NotFound
