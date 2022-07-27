import styled from 'styled-components'

export const AffixContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  cursor: pointer;

  @media ${props => props.theme.media.mobile} {
    display: none;
  }
`
