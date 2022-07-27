import styled from 'styled-components'

export const ToolbarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: auto;
`

export const ToolbarItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.4s ease-in, border 0s, border-radius 0s, background-color 0s;
  cursor: pointer;
  min-width: 50px;
  height: 50px;
  margin: 0 2%;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  & svg:hover {
    transform: scale(1.1);
    transition-duration: 200ms;
    color: ${({ theme }) => theme.colors.accent};
  }
`
