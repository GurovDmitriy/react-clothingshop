import { put, takeEvery } from "redux-saga/effects"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function* setThemeAction(action) {
  try {
    // call to LocalStorage
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield put({
      type: "theme/setThemeActionSuccess",
      payload: action.payload,
    })
  } catch {
    yield put({ type: "theme/setThemeActionFailure", payload: null })
  }
}

function* setThemeSaga() {
  yield takeEvery("theme/setThemeActionPending", setThemeAction)
}

export { setThemeSaga }
