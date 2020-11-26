import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import GLOBALS from '../../constants/Globals';

export default class ResetPwdScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: this.props.route.params.userInfo,
      newPwd: '',
      newCPwd: '',
      characters: 0,
    };
  }
  componentDidMount() {}
  clear() {
    this.setState({newPwd: '', newCPwd: ''});
  }

  doReset() {
    let url = GLOBALS.BASE_URL + 'user/user-update';
    this.setState((prevState) => {
      let userInfo = {...prevState.userInfo};
      userInfo.password = this.state.newPwd;
      return {userInfo};
    });

    if (this.state.characters < 6) {
      Toast.show(
        'password must be over than 6 characters',
        Toast.LONG,
        Toast.TOP,
      );
    } else {
      setTimeout(() => {
        console.log(this.state.userInfo);
        fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state.userInfo),
        }).then((response) => {
          if (response.status === 200) {
            this.props.navigation.navigate('Login');
            Toast.show(
              'You reset password successfully',
              Toast.LONG,
              Toast.TOP,
            );
            this.clear();
          }
        });
      }, 1000);
    }
  }

  render() {
    return (
      <SafeAreaView style={style.main}>
        <View style={style.container}>
          <View style={style.titleSection}>
            <Text style={style.title}>Reset your </Text>
            <View style={style.second}>
              <Text style={style.title_redColor}>password</Text>
            </View>
          </View>
          <View style={style.formSection}>
            <TextInput
              style={style.formItem}
              placeholder="new password"
              onChangeText={(input) =>
                this.setState({
                  newPwd: input,
                  characters: this.state.characters + 1,
                })
              }
              value={this.state.newPwd}
              secureTextEntry={true}
            />
            <TextInput
              style={style.formItem}
              placeholder="retype password"
              onChangeText={(input) => this.setState({newCPwd: input})}
              value={this.state.newCPwd}
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={
                this.state.newPwd !== '' &&
                this.state.newPwd === this.state.newCPwd
                  ? style.btn
                  : style.btn_disabled
              }
              disabled={
                this.state.newPwd !== '' &&
                this.state.newPwd === this.state.newCPwd
                  ? false
                  : true
              }
              onPress={() => {
                this.doReset();
              }}>
              <Text style={style.confirmBtn}>confirm</Text>
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
  },
  btn_disabled: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#f20530',
    opacity: 0.5,
  },
  confirmBtn: {
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
