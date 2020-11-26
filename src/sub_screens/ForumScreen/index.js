import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HeaderBar from '../../components/HeaderBar';
import MyPostScreen from './tabs/MyPostScreen';
import AllPostScreen from './tabs/AllPostScreen';
import GLOBALS from '../../constants/Globals';

const TopTab = createMaterialTopTabNavigator();

export default class ForumScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Health Forum',
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
            style: {backgroundColor: GLOBALS.BASE_COLOR},
          }}>
          <TopTab.Screen name="All Posts" component={AllPostScreen} />
          <TopTab.Screen name="My Posts" component={MyPostScreen} />
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
