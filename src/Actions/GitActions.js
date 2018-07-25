/* Action */
const GIT_LOGIN_SUCCESS = "git_login_success"
const GIT_LOGIN_FAILD = "git_login_faild"
const GIT_LOGIN_EVENT = "git_login_event"

/* Action Creators */
function loginActionSuccessCreator(login) {
  const action = {
    type: GIT_LOGIN_SUCCESS,
    login
  }
  dispatch(GIT_LOGIN_EVENT)
  return action
}

function loginActionFaildCreator(error) {
  const action = {
    type: GIT_LOGIN_FAILD,
    error
  }
  return action
}

export {
  GIT_LOGIN_SUCCESS,
  GIT_LOGIN_FAILD,
  GIT_LOGIN_EVENT,
  loginActionSuccessCreator,
  loginActionFaildCreator
}
