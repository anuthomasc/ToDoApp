
import {AppRegistry} from 'react-native';
import App from './App';
import {
    setCustomText
  } from 'react-native-global-props';
  const customTextProps = {
    style: {
      fontFamily: 'Roboto-Light',
    }
  };
  setCustomText(customTextProps);
console.disableYellowBox=true;
console.ignoredYellowBox = ['Remote debugger'];
AppRegistry.registerComponent('ToDoApp', () => App);
