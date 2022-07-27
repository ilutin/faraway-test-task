import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Pagination as AntPagination } from 'antd'
import Flex from 'components/templates/Flex/Flex'
import { selectTotal, selectPageNumber } from 'store/selectors'
import { sagaActions } from 'store/sagas/sagaActions'

const Pagination = () => {
  const dispatch = useDispatch()
  const total = useSelector(selectTotal)
  const pageNumber = useSelector(selectPageNumber)

  const onPageChange = useCallback(
    page => {
      dispatch({
        type: sagaActions.CHANGE_PAGE,
        payload: {
          page,
        },
      })
    },
    [dispatch],
  )

  return (
    total > 10 && (
      <Flex justify="center" align="center">
        <AntPagination
          onChange={onPageChange}
          current={pageNumber}
          defaultCurrent={1}
          total={total}
          showSizeChanger={false}
          responsive
        />
      </Flex>
    )
  )
}

export default Pagination
