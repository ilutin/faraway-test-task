import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  people: [],
  total: null,
}

const peopleReducer = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPeopleLoading(state, action) {
      state.loading = action.payload
    },
    setPeople(state, action) {
      return {
        ...state,
        people: action.payload.results,
        total: action.payload.count,
      }
    },
    changePersonData(state, action) {
      const person = state.people.find(item => item.name === action.payload.name)

      person[action.payload.title] = action.payload.value
    },
  },
})

export const { setPeopleLoading, setPeople, changePersonData } = peopleReducer.actions
export default peopleReducer.reducer
