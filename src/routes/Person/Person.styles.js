import styled from 'styled-components'
import { Typography } from 'antd'

const { Title } = Typography

export const PersonStyled = styled.div`
  width: 100vw;
  height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  & .ant-typography {
    color: ${({ theme }) => theme.colors.white};
  }
`

export const PersonContentStyled = styled.div`
  width: 100%;
  padding: 0 10vw;
`

export const TitleStyled = styled(Title)`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1.2);
  font-family: 'Gill Sans', sans-serif;
  letter-spacing: 0.5rem;
  height: 20vh;
  padding: 5vh 0;

  @media ${props => props.theme.media.mobile} {
    transform: scale(0.9);
    letter-spacing: 0.2rem;
    padding: 3vh 0;
  }
`
