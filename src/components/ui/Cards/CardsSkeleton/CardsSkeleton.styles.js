import styled from 'styled-components'
import { Card } from 'antd'

export const CardStyled = styled(Card)`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 240px;
  border: none;
`
