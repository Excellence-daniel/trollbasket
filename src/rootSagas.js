import { all } from 'redux-saga/effects'
import usersSaga from './pages/Register/redux/sagas'

export default function* root() {
  yield all([usersSaga()])
}
