import { StackNavigator} from "react-navigation";
import HomeScreen from '../containers/HomeScreen';
import LoginScreen from '../containers/LoginScreen';
const AppNavigator = StackNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
},
    {
        headerMode: 'none',
        initialRouteName: 'Login'
    }
);

export default AppNavigator;