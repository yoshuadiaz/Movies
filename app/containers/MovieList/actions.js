/*
 *
 * MovieList actions
 *
 */
import { createActions } from "redux-actions"
import {
  LOAD_ITEM_FETCH,
  LOAD_ITEM_SUCCESS,
  LOAD_ITEM_FAILURE
} from "./constants"

const ActionsCreator = createActions(
  {},
  LOAD_ITEM_FETCH,
  LOAD_ITEM_SUCCESS,
  LOAD_ITEM_FAILURE
)

export default ActionsCreator
