import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HeaderBar from '../../components/HeaderBar';
import History from './tabs/History';
import Payments from './tabs/Payments';
import Earnings from './tabs/Earnings';
import AsyncStorage from '@react-native-community/async-storage';
const TopTab = createMaterialTopTabNavigator();
let role;
export default class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    (async () => {
      try {
        const value = await AsyncStorage.getItem('userInfo');
        this.setState({userInfo: JSON.parse(value)});
        role = JSON.parse(value).role;
      } catch (e) {
        console.log(e);
      }
    })();
    this.state = {
      title: 'Payments',
    };
    this.handler = this.handler.bind(this);
  }
  handler() {
    this.setState({
      isScrolling: true,
    });
  }
  // state = {
  //   title: '',
  //   isScrolling: false,
  // };
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
          <TopTab.Screen name="Payments" component={Payments} />
          {role === 'doctor' && (
            <TopTab.Screen name="Earnings" component={Earnings} />
          )}
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
