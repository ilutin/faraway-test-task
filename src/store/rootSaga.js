import { all } from 'redux-saga/effects'
import { peopleSagaWatcher } from './sagas'

export default function* () {
  yield all([peopleSagaWatcher()])
}
