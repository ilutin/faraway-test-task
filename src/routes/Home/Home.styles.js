import styled from 'styled-components'
import { Layout } from 'antd'

const { Header, Content } = Layout

export const LayoutStyled = styled(Layout)`
  background: none;
`

export const HeaderStyled = styled(Header)`
  background: #353941;
  color: #fff;
`

export const ContentStyled = styled(Content)`
  padding: 10vh 10vw;
`
