import styled, { css } from 'styled-components'

export const IconButtonStyled = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & input {
    height: 50px;
    width: 50px;
    border-style: none;
    padding: 10px 40px 5px 10px;
    font-size: 16px;
    outline: none;
    border-radius: 25px;
    transition: all 0.5s ease-in-out;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};

    &::placeholder {
      color: rgb(255, 255, 255, 0.5);
      font-size: 16px;
      font-weight: 100;
    }

    &:focus {
      width: 300px;
      border-radius: 0;
      background-color: transparent;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);

      @media ${props => props.theme.media.mobile} {
        width: 200px;
      }
    }

    &:invalid:focus {
      border-bottom: 1px solid ${({ theme }) => theme.colors.invalid};
    }
  }

  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-style: none;
    font-size: 16px;
    font-weight: 700;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0;
    color: ${({ theme }) => theme.colors.white};
    background: transparent;
    pointer-events: painted;

    ${props =>
      props.selected &&
      css`
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.primary};
      `}

    &:focus ~ input {
      width: 300px;
      border-radius: 0;
      background-color: transparent;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);

      @media ${props => props.theme.media.mobile} {
        width: 200px;
      }
    }
  }
`
