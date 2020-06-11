import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Activity
import HomeScreen from './screens/HomeScreen';
import EditScreen from './screens/EditScreen';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Edit: EditScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Home : HomeScreen,
      AppStack,
    },
    {
      initialRouteName: "Home",
    },
  ),
);
