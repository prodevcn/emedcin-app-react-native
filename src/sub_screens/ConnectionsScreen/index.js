import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HeaderBar from '../../components/HeaderBar';
import PatientConnection from './tabs/PatientConnection';
import DoctorConnection from './tabs/DoctorConnection';
import InstitutionConnection from './tabs/InstitutionConnection';

const TopTab = createMaterialTopTabNavigator();

export default class ConnectionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Connections',
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
          <TopTab.Screen name="Patients" component={PatientConnection} />
          <TopTab.Screen name="Doctors" component={DoctorConnection} />
          <TopTab.Screen
            name="Institutions"
            component={InstitutionConnection}
          />
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
