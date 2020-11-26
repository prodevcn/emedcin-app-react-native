import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HeaderBar from '../../components/HeaderBar';
import ProfileArea from '../../components/ProfileArea';
import Activity from './tabs/Activity';
import Connections from './tabs/Connections';
import {connect} from 'react-redux';
import {getConnections} from '../../actions/common';
const TopTab = createMaterialTopTabNavigator();
class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Profile',
    };
    // this.props.getConnections(this.props.userInfo);
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
        <ProfileArea />
        <TopTab.Navigator
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: '#168ab8',
            style: {backgroundColor: '#024059'},
          }}>
          <TopTab.Screen name="Activity" component={Activity} />
          <TopTab.Screen
            name={this.props.connectionNum + ' Connections'}
            component={Connections}
          />
        </TopTab.Navigator>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (store) => {
  const {userInfo, connectionNum} = store.common;
  return {userInfo, connectionNum};
};
export default connect(mapStateToProps, {getConnections})(ProfileScreen);
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
