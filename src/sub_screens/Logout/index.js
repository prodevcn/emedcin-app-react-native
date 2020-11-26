import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class Logout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    (async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Onboarding');
    })();
  }
  render() {
    return <View style={style.container} />;
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#f20530',
  },
});
