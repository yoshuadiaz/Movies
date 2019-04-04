import { delay } from "redux-saga"
import { takeEvery, put } from "redux-saga/effects"
import { LOAD_ITEM_FETCH } from "./constants"
import Actions from "./actions"
import mockData from "./mockData"

function* fetchItems() {
  yield delay(1500)
  try {
    yield put(Actions.movielistLoadMovieItemsSuccess(mockData))
  } catch (err) {
    yield put(Actions.movielistLoadMovieItemsFailure(err))
  }
}
// Individual exports for testing
export default function* movieListSaga() {
  yield takeEvery(LOAD_ITEM_FETCH, fetchItems)
}
