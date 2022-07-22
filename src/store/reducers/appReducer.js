import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  alert: null,
  titleSort: null,
  searchBy: null,
}

const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAlert(state, action) {
      state.alert = action.payload
    },
    setTitleSort(state) {
      if (state.titleSort && state.titleSort === 'asc') {
        state.titleSort = 'desc'
      } else {
        state.titleSort = 'asc'
      }
    },
    setSearch(state, action) {
      state.searchBy = action.payload
    },
    clearToolbar() {
      return initialState
    },
  },
})

export const { setAlert, setTitleSort, setSearch, clearToolbar } = appReducer.actions
export default appReducer.reducer
