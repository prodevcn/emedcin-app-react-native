import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HeaderBar from '../../components/HeaderBar';
import Upcoming from './tabs/Upcoming';
import Requests from './tabs/Requests';
import History from './tabs/History';

const TopTab = createMaterialTopTabNavigator();

export default class AppointmentsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Appointments',
    };
    this.handler = this.handler.bind(this);
  }
  handler() {
    this.setState({
      isScrolling: true,
    });
  }
  state = {
    title: '',
    isScrolling: false,
  };
  render() {
    return (
      <SafeAreaView style={styles.main}>
        <HeaderBar
          title={this.state.title}
          navigation={this.props.navigation}
        />
        <TopTab.Navigator
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: '#168ab8',
            style: {backgroundColor: '#024059'},
          }}>
          <TopTab.Screen name="Upcoming" component={Upcoming} />
          <TopTab.Screen name="Requests" component={Requests} />
          <TopTab.Screen name="History" component={History} />
        </TopTab.Navigator>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  profileArea: {},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
