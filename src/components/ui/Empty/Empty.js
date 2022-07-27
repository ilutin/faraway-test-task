import React from 'react'
import PropTypes from 'prop-types'
import { Button, Empty as AntEmpty } from 'antd'
import { Link } from 'react-router-dom'
import { routes } from 'config/routes'
import Flex from 'components/templates/Flex/Flex'
import { EmptyStyled } from './Empty.styles'

const Empty = ({ withLink }) => (
  <Flex justify="center" align="center" direction="column">
    <EmptyStyled image={AntEmpty.PRESENTED_IMAGE_SIMPLE} />

    {withLink && (
      <Link to={routes.root()}>
        <Button type="primary">Back Home</Button>
      </Link>
    )}
  </Flex>
)

Empty.propTypes = {
  withLink: PropTypes.bool,
}

Empty.defaultProps = {
  withLink: true,
}

export default Empty
