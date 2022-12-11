import { call, put, takeEvery } from "redux-saga/effects"
import api from "../../api/api"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function* signUpAction(action) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(api.auth.signUp, action.payload)
    yield put({
      type: "auth/signUpActionSuccess",
      payload: response.uid,
    })
  } catch {
    yield put({ type: "auth/signUpActionFailure", payload: "error" })
  }
}

function* signUpSaga() {
  yield takeEvery("auth/signUpActionPending", signUpAction)
}

export { signUpSaga }
