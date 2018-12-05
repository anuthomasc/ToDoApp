import React, { Component } from "react";
import { View } from "react-native";
import firebase from "react-native-firebase";

import { GoogleSigninButton, GoogleSignin } from "react-native-google-signin";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import styles from "../styles/loginStyle";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSigninInProgress: false,
    };
  }
  componentDidMount() {}

  _signIn() {
    GoogleSignin.configure();
    GoogleSignin.signIn()
      .then(data => {
        console.log(data);
        // Create a new Firebase credential with the token
        const credential = firebase.auth.GoogleAuthProvider.credential(
          data.idToken,
          data.accessToken
        );
        return firebase.auth().signInWithCredential(credential);
      })
      .then(user => {
        console.log(user);
        this.writeUserData(user);
        console.log(this.props)
        this.props.navigation.navigate('Home')
      })
      .catch(error => {
        console.log(error);
        const { code, message } = error;
      });
  }
  writeUserData(user){
    let name=user.user._user.displayName;
    let email=user.user._user.email;
    let userId=user.user._user.uid;
    firebase.database().ref('Users/'+ userId + '/').set({
      name,
      email,
      userId
  }).then((data)=>{
      //success callback
      console.log(data)
  }).catch((error)=>{
      //error callback
      console.log('error ' , error)
  })
  }
  render() {
    return (
      <View style={styles.container}>
        <GoogleSigninButton
          style={{ width: 48, height: 48 }}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark}
          onPress={()=>this._signIn()}
          disabled={this.state.isSigninInProgress}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
