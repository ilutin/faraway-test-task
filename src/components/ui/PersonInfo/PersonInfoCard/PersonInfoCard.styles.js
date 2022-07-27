import styled from 'styled-components'
import { Card, Statistic } from 'antd'

export const CardStyled = styled(Card)`
  background-color: ${({ theme }) => theme.colors.dark};
  border: none;

  & .ant-card-body {
    min-height: 120px;
  }

  & .ant-card-actions > li {
    margin: 4px 0;

    & svg {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  & .ant-input {
    border: none;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    line-height: 2;
    letter-spacing: 1.2px;
    font-size: 1.05rem;

    &:focus {
      border: none;
      box-shadow: none;
    }
  }

  & .ant-input-group-addon {
    border: none;
    background: ${({ theme }) => theme.colors.secondary};
  }
`

export const StatisticStyled = styled(Statistic)`
  & .ant-statistic-title {
    color: #e4dccf;
  }

  & .ant-statistic-content-value {
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
