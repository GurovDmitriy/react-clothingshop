import {ActionStatus} from "../../helpers/constants"

type userState = {
  user: {
    entities: object
    status: ActionStatus
    error: string
  }
}

function selectUserStatusFetch(state: userState) {
  return state.user.status
}

function selectUser(state: userState) {
  return state.user.entities
}

export { selectUserStatusFetch, selectUser }
