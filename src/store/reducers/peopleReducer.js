import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  people: [],
}

const peopleReducer = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPeopleLoading(state, action) {
      state.loading = action.payload
    },
    setPeople(state, action) {
      console.log(action.payload)

      return {
        ...state,
        people: action.payload,
      }
    },
  },
})

export const { setPeopleLoading, setPeople } = peopleReducer.actions
export default peopleReducer.reducer
