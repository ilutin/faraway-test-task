import axios from 'axios'
import { all, call, put, takeLatest, select } from 'redux-saga/effects'
import { setPeople, setPeopleLoading } from 'store/reducers/peopleReducer'
import { setAlert, setPage, setSearch } from 'store/reducers/appReducer'
import { selectSearch } from 'store/selectors'
import { sagaActions } from './sagaActions'

const fetchPeople = page => axios.get(`https://swapi.dev/api/people?page=${page}`)
const searchPeople = ({ searchString, page = 1 }) =>
  axios.get(`https://swapi.dev/api/people/?search=${searchString}&page=${page}`)

export function* fetchPeopleSaga({ payload }) {
  try {
    yield put(setPeopleLoading(true))
    const response = yield call(() => fetchPeople(payload.page))

    if (response?.status === 200) {
      yield put(setPeople(response.data))
      yield put(setPeopleLoading(false))
    }
  } catch (e) {
    yield put(setPeopleLoading(false))
    yield put(setAlert('Error loading people'))
  }
}

export function* searchPeopleSaga({ payload }) {
  try {
    yield put(setSearch(payload.searchString))

    if (payload.searchString) {
      yield put(setPeopleLoading(true))
      const response = yield call(() => searchPeople(payload))

      if (response?.status === 200) {
        yield put(setPeople(response.data))
      }

      yield put(setPeopleLoading(false))
    } else {
      yield call(fetchPeopleSaga, { payload: { page: 1 } })
    }
  } catch (e) {
    yield put(setPeopleLoading(false))
    yield put(setAlert('Error'))
  }
}

export function* changePageSaga({ payload }) {
  try {
    yield put(setPage(payload.page))

    const searchString = yield select(selectSearch)

    if (searchString) {
      yield call(searchPeopleSaga, { payload: { searchString, page: payload.page } })
    } else {
      yield call(fetchPeopleSaga, { payload: { page: payload.page } })
    }
  } catch (e) {
    yield put(setAlert('Error'))
  }
}

export default function* peopleSagaWatcher() {
  yield all([
    takeLatest(sagaActions.FETCH_PEOPLE, fetchPeopleSaga),
    takeLatest(sagaActions.CHANGE_PAGE, changePageSaga),
    takeLatest(sagaActions.SEARCH_PEOPLE, searchPeopleSaga),
  ])
}
