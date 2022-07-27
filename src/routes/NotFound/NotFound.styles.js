import styled from 'styled-components'

export const NotFoundStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & .ant-result-title,
  & .ant-result-subtitle {
    color: ${({ theme }) => theme.colors.white};
  }
`
