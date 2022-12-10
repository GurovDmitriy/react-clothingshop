import { call, put, takeEvery } from "redux-saga/effects"
import api from "../../api/api"
import { AuthActionTypes } from "./authActionTypes"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function* signUp(action) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(api.auth.signUp, action.payload)
    yield put({
      type: AuthActionTypes.SIGN_ACTION_SUCCESS,
      payload: response.uid,
    })
  } catch {
    yield put({ type: AuthActionTypes.SIGN_ACTION_FAILURE, payload: "error" })
  }
}

function* signUpSaga() {
  yield takeEvery("auth/signUpAction", signUp)
}
