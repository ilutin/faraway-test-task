export const selectPageNumber = state => state.app.page

export const selectSearch = state => state.app.searchString

export const selectTotal = state => state.people.total

export const selectPeople = state => state.people.people

export const selectPersonByName = (state, name) =>
  state.people.people.find(person => person.name === name)

export const selectPeopleLoading = state => state.people.loading
