import {
  GIT_LOGIN_SUCCESS,
  GIT_FOLLOWER_SUCCESS
} from '../Actions/GitActions'
function GitHubReducer(state = {}, action) {
  switch (action.type) {
    case GIT_LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          login: true,
          TOKEN: action.login
        }
      }
      break;
    case GIT_FOLLOWER_SUCCESS:
      return {
        ...state,
        followers: action.follower.data.user.followers.edges.map(function(item){
          return item.node.name;
        }).filter(function(name){
          return !!name
        }),
        following: action.follower.data.user.following.edges.map(function(item){
          return item.node.name;
        }).filter(function(name){
          return !!name
        })
      }
      break;
    default:
      return state;
      break;
  }
}

export default GitHubReducer
