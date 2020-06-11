import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Activity
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import NewUser from './screens/NewUser';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
  NewUser: NewUser,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: HomeScreen,
      NewUser: NewUser,
      AppStack,
    },
    {
      initialRouteName: 'NewUser',
    },
  ),
);
