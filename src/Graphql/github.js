// import gql from "graphql-tag";
//
// const getGitFollowers = function(gitUserName) {
//   return {
//
//     gql `
//   query followers($states: [IssueState!], $name: String!, $login: String!, $before: String) {
//     repositoryOwner(login: $login) {
//       repository(name: $name) {
//         issues(last: 25, states: $states, before: $before) {
//           edges {
//             node {
//               id
//               title
//             }
//           	cursor
//           }
//           pageInfo {
//             hasPreviousPage
//           }
//         }
//       }
//     }
//   }
// `;
//   }
// }
