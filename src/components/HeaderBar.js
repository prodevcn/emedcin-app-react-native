import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Arrow from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import {DrawerActions} from '@react-navigation/native';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import GLOBALS from '../constants/Globals';
const win = Dimensions.get('window');
class HeaderBar extends Component {
  constructor(props) {
    super(props);
  }
  doEdit() {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('userInfo');
        this.setState({userInfo: JSON.parse(value)});
        this.props.navigation.navigate('EditProfileFirstPage', {
          userInfo: this.props.userInfo,
        });
      } catch (e) {
        console.log(e);
      }
    })();
  }
  render() {
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <View style={styles.title_area}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Arrow name="md-arrow-back" size={24} color={'white'} />
            </TouchableOpacity>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          {this.props.title === 'Profile' && (
            <View style={styles.utility_area}>
              <TouchableOpacity
                onPress={() => {
                  this.doEdit();
                }}>
                <Icon name="edit" size={24} color={'white'} />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <TouchableOpacity
          style={styles.menu}
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }>
          <MenuIcon name="md-menu" size={24} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (store) => {
  const {userInfo} = store.common;
  return {userInfo};
};

export default connect(mapStateToProps)(HeaderBar);

const styles = StyleSheet.create({
  main: {
    height: 52,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GLOBALS.BASE_COLOR,
  },
  container: {
    flexDirection: 'row',
    padding: 0,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
    flex: 1,
  },
  title_area: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  title: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 10,
  },
  utility_area: {
    alignItems: 'center',
    justifyContent: 'center',
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
