import React, { useCallback, useRef } from 'react'
import debounce from 'lodash.debounce'
import { Search } from '@styled-icons/fluentui-system-filled/Search'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton } from 'components/molecules'
import { selectSearch } from 'store/selectors'
import { sagaActions } from 'store/sagas/sagaActions'

const SearchButton = () => {
  const dispatch = useDispatch()
  const searchString = useSelector(selectSearch)

  const debouncedSearch = useRef(
    debounce(
      value =>
        dispatch(dispatch({ type: sagaActions.SEARCH_PEOPLE, payload: { searchString: value } })),
      500,
    ),
  ).current

  const onInputChange = useCallback(
    event => {
      if (event.target.value.length !== 1) {
        debouncedSearch(event.target.value)
      }
    },
    [debouncedSearch],
  )

  return (
    <IconButton
      placeholder="Type to Search..."
      onInputChange={onInputChange}
      isSelected={Boolean(searchString)}
    >
      <Search size={28} />
    </IconButton>
  )
}

export default SearchButton
