/*
 *
 * MovieList reducer
 *
 */
import { handleActions } from "redux-actions"
import { fromJS } from "immutable"
import {
  LOAD_ITEM_FETCH,
  LOAD_ITEM_SUCCESS,
  LOAD_ITEM_FAILURE
} from "./constants"

export const initialState = fromJS({
  isLoading: false,
  hasError: false,
  items: []
})

const loadItemFetchMutation = state => state.set("isLoading", true)
const loadItemSuccessMutation = (state, action) => {
  return state.set("isLoading", false).set("items", action.payload)
}
const loadItemFailureMutation = state =>
  state.set("isLoading", false).set("hasError", true)

const movieListReducer = handleActions(
  {
    [LOAD_ITEM_FETCH]: loadItemFetchMutation,
    [LOAD_ITEM_SUCCESS]: loadItemSuccessMutation,
    [LOAD_ITEM_FAILURE]: loadItemFailureMutation
  },
  initialState
)

export default movieListReducer
