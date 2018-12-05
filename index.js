
import {AppRegistry} from 'react-native';
import App from './App';
import {
    setCustomText
  } from 'react-native-global-props';
  import firebase from 'react-native-firebase'
  const customTextProps = {
    style: {
      fontFamily: 'Roboto-Light',
    }
  };
  setCustomText(customTextProps);
console.disableYellowBox=true;

firebase.initializeApp();
console.ignoredYellowBox = ['Remote debugger'];
AppRegistry.registerComponent('ToDoApp', () => App);
