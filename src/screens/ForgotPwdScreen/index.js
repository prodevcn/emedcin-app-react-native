import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import GLOBAL from '../../constants/Globals';
import Toast from 'react-native-simple-toast';
export default class ForgotPwdScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  doReset() {
    let url = GLOBAL.BASE_URL + 'user/reset-password';
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.email === 'Email not found') {
          Toast.show('Wrong User', Toast.LONG, Toast.TOP);
        } else if (responseJson.email === 'Email is invalid') {
          Toast.show('Invalid Email', Toast.LONG, Toast.TOP);
        } else {
          this.props.navigation.navigate('ResetPwd', {userInfo: responseJson});
          this.setState({email: ''});
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <SafeAreaView style={style.main}>
        <View style={style.container}>
          <View style={style.titleSection}>
            <Text style={style.title}>Oops, forgotten your </Text>
            <View style={style.second}>
              <Text style={style.title_redColor}>password</Text>
              <Text style={style.title}>?</Text>
            </View>
            <Text style={style.description}>
              Enter your email address below and a link to reset your password
              would be sent to you.
            </Text>
          </View>
          <View style={style.formSection}>
            <TextInput
              style={style.formItem}
              placeholder="email address"
              onChangeText={(input) => this.setState({email: input})}
              value={this.state.email}
            />
            <TouchableOpacity
              style={this.state.email === '' ? style.btn_disabled : style.btn}
              disabled={this.state.email === '' ? true : false}
              onPress={() => {
                this.doReset();
              }}>
              <Text style={style.resetBtn}>reset password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleSection: {
    flex: 3,
    width: '100%',
  },
  second: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 28,
    color: '#024059',
  },
  title_redColor: {
    fontSize: 28,
    color: '#f20530',
  },
  description: {
    marginTop: 20,
    color: '#717171',
  },
  formSection: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
  },
  formItem: {
    width: '100%',
    borderColor: '#717171',
    borderWidth: 1,
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'CenturyGothic',
    paddingLeft: 10,
  },
  forgot: {
    textAlign: 'right',
    marginRight: 20,
    color: '#024059',
  },
  btn: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#f20530',
    padding: 0,
  },
  btn_disabled: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#f20530',
    padding: 0,
    opacity: 0.5,
  },
  resetBtn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  footer: {
    flex: 2,
    backgroundColor: 'aqua',
    flexDirection: 'row',
    paddingTop: 10,
  },
  footer_text: {
    marginTop: 40,
    marginRight: 10,
    color: '#717171',
  },
  registerBtn: {
    marginTop: 40,
    color: '#024059',
  },
});
