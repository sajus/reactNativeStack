import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { gitHubRepoList } from '../../Graphql/github'

class List extends Component {
   state = {
      username: '',
      buttonClick: false,
     "data": {
    "user": {
      "repositories": {
        "edges": [
          {
            "node": {
              "id": "MDEwOlJlcG9zaXRvcnk4NzAyMDAx",
              "nameWithOwner": "sajus/redactor-js"
            }
          },
          {
            "node": {
              "id": "MDEwOlJlcG9zaXRvcnk5NTA3NTM2",
              "nameWithOwner": "sajus/ant-build-script"
            }
          },
          {
            "node": {
              "id": "MDEwOlJlcG9zaXRvcnkxMTgyMDQxMg==",
              "nameWithOwner": "sajus/loondriSurvey"
            }
          },
          {
            "node": {
              "id": "MDEwOlJlcG9zaXRvcnkxMTgyMjI2NA==",
              "nameWithOwner": "sajus/chaplin"
            }
          },
          {
            "node": {
              "id": "MDEwOlJlcG9zaXRvcnkxMjI0NDIxOQ==",
              "nameWithOwner": "sajus/BhejaFry"
            }
          },
          {
            "node": {
              "id": "MDEwOlJlcG9zaXRvcnkxMjM4MjE3Ng==",
              "nameWithOwner": "sajus/AndeKafunda"
            }
          },
          {
            "node": {
              "id": "MDEwOlJlcG9zaXRvcnkxNDU4NDI0NA==",
              "nameWithOwner": "sajus/bootstrap-maxlength"
            }
          },
          {
            "node": {
              "id": "MDEwOlJlcG9zaXRvcnkxNDU4NTY4MA==",
              "nameWithOwner": "sajus/jquery-cookie"
            }
          },
          {
            "node": {
              "id": "MDEwOlJlcG9zaXRvcnkxNDY4NTUxNw==",
              "nameWithOwner": "sajus/Kartoos"
            }
          },
          {
            "node": {
              "id": "MDEwOlJlcG9zaXRvcnkxNjM0Mjc2Nw==",
              "nameWithOwner": "sajus/moment"
            }
          },
          {
            "node": {
              "id": "MDEwOlJlcG9zaXRvcnkxNjcyMjIxNA==",
              "nameWithOwner": "sajus/aight"
            }
          },
          {
            "node": {
              "id": "MDEwOlJlcG9zaXRvcnkzMDYzOTQyNw==",
              "nameWithOwner": "sajus/frontend-dev-bookmarks"
            }
          },
          {
            "node": {
              "id": "MDEwOlJlcG9zaXRvcnkzMTUyNTkwNw==",
              "nameWithOwner": "sajus/NodeJS"
            }
          },
          {
            "node": {
              "id": "MDEwOlJlcG9zaXRvcnkzNTQ3MjQ4Mg==",
              "nameWithOwner": "sajus/tomodachi"
            }
          },
          {
            "node": {
              "id": "MDEwOlJlcG9zaXRvcnk0NDc3NTYxNA==",
              "nameWithOwner": "sajus/belleza"
            }
          }
        ]
      }
    }
  }
}
  handleEmail = (text) => {
        this.setState({ username: text })
     }
submit = (username) => {
  //this.state.buttonClick = true;
  this.setState({ buttonClick: true })
    alert(username);
}
   alertItemName = (item) => {
      alert( "Id: "+item.node.id)
   }

   render() {
     const {onPressEvent} = this.props;
      return (
         <View style = {styles.MainContainer}>

                <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "GitHub Username"
                   placeholderTextColor = "#9a73ef"
                   autoCapitalize = "none"
                   onChangeText = {this.handleEmail}
                   userName = {this.state.username}
                   />
                <TouchableOpacity
                   style = {styles.submitButton}
                   onPress = {onPressEvent}>
                   <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>

            {
               this.state.buttonClick && this.state.data.user.repositories.edges.map((item, index) => (
                  <TouchableOpacity
                     key = {item.node.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.node.nameWithOwner}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
//export default List
const mapStateToProps = (state) => {
  //return 'user': state.user;
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPressEvent : (evt) => dispatch(gitHubRepoList(evt.target.value))
  }
}

const ListConnect = connect(mapStateToProps, mapDispatchToProps)(List)

export default ListConnect
const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   },
   input: {
      margin: 15,
      height: 40,
      width: 200,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   },

   MainContainer:
   {
      justifyContent: 'center',
      flex:1,
   }
})
