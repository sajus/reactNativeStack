import { GIT_LOGIN_SUCCESS } from '../Actions/GitActions'
function GitHubReducer(state = {}, action) {
  switch (action.type) {
    case GIT_LOGIN_SUCCESS:
      state = {
        login: true,
        TOKEN: action.login
      }
      return state
    break
    default:
      return state
  }
}

export default GitHubReducer
