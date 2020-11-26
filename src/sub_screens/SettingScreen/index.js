import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';

import IndexScreen from './IndexScreen';
import NotificationSettings from './NotificationSettings';
import Availability from './Availability';
import Charges from './Charges';
import BlockedUsers from './BlockedUsers';

const Stack = createStackNavigator();

function MainStack(props) {
  console.log(props);
  return (
    <Stack.Navigator initialRouteName="IndexScreen">
      <Stack.Screen
        name="IndexScreen"
        component={IndexScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSettings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Charges"
        component={Charges}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Availability"
        component={Availability}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BlockedUsers"
        component={BlockedUsers}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    (async () => {
      try {
        const value = await AsyncStorage.getItem('userInfo');
        this.setState({userInfo: JSON.parse(value)});
      } catch (e) {
        console.log(e);
      }
    })();
    this.state = {
      title: 'Settings',
      screen: '',
      userInfo: {},
    };
  }

  render() {
    return <MainStack userInfo={this.state.userInfo} />;
  }
}
