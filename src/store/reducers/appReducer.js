import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  alert: null,
  searchString: null,
  page: 1,
}

const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAlert(state, action) {
      state.alert = action.payload
    },
    setSearch(state, action) {
      state.searchString = action.payload
    },
    setPage(state, action) {
      state.page = action.payload
    },
  },
})

export const { setAlert, setSearch, setPage } = appReducer.actions
export default appReducer.reducer
