import styled from 'styled-components'
import { Card } from 'antd'

const { Meta } = Card

export const CardStyled = styled(Card)`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: rgba(255, 255, 255, 0.35) 0 5px 10px;
  border: none;

  & .ant-card-actions li span {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 16px;
    letter-spacing: 0.8rem;
    font-weight: 500;
  }
`

export const MetaStyled = styled(Meta)`
  min-height: 150px;
  width: 100%;

  & .ant-card-meta-detail {
    width: 100%;
  }

  & .ant-card-meta-title {
    font-family: 'Gill Sans', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .ant-card-meta-description {
    color: ${({ theme }) => theme.colors.secondary};
    margin: 1rem 0;
    font-size: 16px;
  }
`
