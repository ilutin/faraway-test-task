import axios from 'axios'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { setPeople, setPeopleLoading } from 'store/reducers/peopleReducer'
import { setAlert } from 'store/reducers/appReducer'

const fetchPeople = () => axios.get('https://swapi.dev/api/people?page=1')

export function* fetchPeopleSaga() {
  try {
    yield put(setPeopleLoading(true))
    const response = yield call(fetchPeople)

    if (response?.status === 200) {
      console.log({ response })
      yield put(setPeople(response.data.results))
      yield put(setPeopleLoading(false))
    }
  } catch (e) {
    yield put(setPeopleLoading(false))
    yield put(setAlert('Ошибка загрузки задач'))
  }
}

export default function* peopleSagaWatcher() {
  yield all([takeEvery('FETCH_PEOPLE', fetchPeopleSaga)])
}
