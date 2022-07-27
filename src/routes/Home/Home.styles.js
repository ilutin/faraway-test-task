import styled from 'styled-components'
import { Layout } from 'antd'

const { Header, Content } = Layout

export const LayoutStyled = styled(Layout)`
  background: none;
`

export const HeaderStyled = styled(Header)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
`

export const ContentStyled = styled(Content)`
  padding: 4vh 8vw;
`
