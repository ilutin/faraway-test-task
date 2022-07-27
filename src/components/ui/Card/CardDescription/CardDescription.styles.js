import styled from 'styled-components'
import { Skeleton } from 'antd'

export const CardDescriptionStyled = styled.div`
  & div span {
    color: ${({ theme }) => theme.colors.white};
  }
`

export const SkeletonStyled = styled(Skeleton)`
  margin-top: 10px;
`
