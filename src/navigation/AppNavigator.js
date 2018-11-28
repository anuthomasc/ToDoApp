import { StackNavigator} from "react-navigation";
import HomeScreen from '../containers/HomeScreen';
const AppNavigator = StackNavigator({
    Home: { screen: HomeScreen },
},
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
);

export default AppNavigator;