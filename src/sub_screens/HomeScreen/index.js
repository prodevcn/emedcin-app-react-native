import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Appointment from './tabs/Appointment';
import Newsfeed from './tabs/Newsfeed';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from '@react-navigation/native';
import {getCommon} from '../../actions/common';
import {connect} from 'react-redux';
const Tab = createMaterialTopTabNavigator();
const win = Dimensions.get('window');

class Home extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getCommon();
  }
  render() {
    return (
      <SafeAreaView style={style.main}>
        <View style={style.headerBar}>
          <View style={style.container}>
            <View style={style.name_area}>
              <Text style={style.title_redColor}>Hi</Text>
              <Text style={style.title}>
                {this.props.userInfo.firstname} {this.props.userInfo.lastname}
              </Text>
            </View>
            <View style={style.photo_area}>
              {this.props.userInfo.imageURL === '' ? (
                <Image
                  source={this.props.userInfo.avatar}
                  style={style.photo}
                />
              ) : (
                <Image
                  source={{uri: this.props.userInfo.imageURL}}
                  style={style.photo}
                />
              )}
            </View>
          </View>
        </View>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: '#168ab8',
            style: {backgroundColor: '#024059'},
          }}>
          <Tab.Screen name="Appointments" component={Appointment} />
          <Tab.Screen name="News Feed" component={Newsfeed} />
        </Tab.Navigator>
        <TouchableOpacity
          style={style.menu}
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }>
          <Icon name="md-menu" size={24} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const mapStateProps = (store) => {
  const {userInfo} = store.common;
  return {userInfo};
};
export default connect(mapStateProps, {getCommon})(Home);
const style = StyleSheet.create({
  main: {
    flex: 1,
  },
  headerBar: {
    backgroundColor: '#024059',
    paddingTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  container: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  style1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  title_redColor: {
    fontSize: 20,
    color: '#f20530',
    marginRight: 10,
  },
  name_area: {
    flexDirection: 'row',
    width: '50%',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  menu: {
    position: 'absolute',
    width: win.width * 0.1,
    height: win.width * 0.1,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    top: 8,
  },
});
