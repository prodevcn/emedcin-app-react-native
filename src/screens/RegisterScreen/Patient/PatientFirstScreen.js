import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import Toast from 'react-native-simple-toast';
import GLOBALS from '../../../constants/Globals';

export default class PatientFirstScreen extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.route.params.role);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      name: '',
      password: '',
      role: this.props.route.params.role,
      imageURL: '',
      confirmpassword: '',
      characters: 0,
    };
  }
  next() {
    if (this.state.characters < 6) {
      Toast.show(
        'password must be over than 6 characters',
        Toast.LONG,
        Toast.TOP,
      );
    } else {
      let userInfo = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        name: this.state.name,
        password: this.state.password,
        password2: this.state.confirmpassword,
        role: this.state.role,
        imageURL: this.state.imageURL,
        avatar: GLOBALS.DEFAULT_PATIENT_AVATAR,
      };
      this.props.navigation.navigate('PatientSecond', {userInfo: userInfo});
    }
  }
  render() {
    return (
      <SafeAreaView style={style.main}>
        <View style={style.container}>
          <View style={style.titleSection}>
            <Text style={style.title}>Register as a </Text>
            <View style={style.second}>
              <Text style={style.title_redColor}>Patient</Text>
            </View>
            <View style={style.pagerBar}>
              <View style={style.pager} />
              <View style={style.pager_disabled} />
            </View>
          </View>
          <View style={style.formSection}>
            <TextInput
              style={style.formItem}
              placeholder="first name"
              onChangeText={(input) => this.setState({firstname: input})}
            />
            <TextInput
              style={style.formItem}
              placeholder="last name"
              onChangeText={(input) => this.setState({lastname: input})}
            />
            <TextInput
              style={style.formItem}
              placeholder="email address"
              onChangeText={(input) => this.setState({email: input})}
            />
            <TextInput
              style={style.formItem}
              placeholder="username"
              onChangeText={(input) => this.setState({name: input})}
            />
            <TextInput
              style={style.formItem}
              placeholder="password"
              secureTextEntry={true}
              onChangeText={(input) =>
                this.setState({
                  password: input,
                  characters: this.state.characters + 1,
                })
              }
            />
            <TextInput
              style={style.formItem}
              placeholder="retype password"
              secureTextEntry={true}
              onChangeText={(input) => this.setState({confirmpassword: input})}
            />
            <TouchableOpacity
              style={
                this.state.firstname !== '' &&
                this.state.lastname !== '' &&
                this.state.email !== '' &&
                this.state.name !== '' &&
                this.state.password !== '' &&
                this.state.confirmpassword !== '' &&
                this.state.password === this.state.confirmpassword
                  ? style.btn
                  : style.btn_disabled
              }
              disabled={
                this.state.firstname !== '' &&
                this.state.lastname !== '' &&
                this.state.email !== '' &&
                this.state.name !== '' &&
                this.state.password !== '' &&
                this.state.confirmpassword !== '' &&
                this.state.password === this.state.confirmpassword
                  ? false
                  : true
              }
              onPress={() => {
                this.next();
              }}>
              <Text style={style.confirmBtn}>next</Text>
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
    flex: 1,
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
    flex: 4,
    width: '100%',
    alignItems: 'center',
  },
  formItem: {
    width: '100%',
    borderColor: '#717171',
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 15,
    fontFamily: 'CenturyGothic',
    paddingLeft: 20,
  },
  pagerBar: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pager: {
    width: '10%',
    height: '100%',
    margin: '5%',
    borderBottomColor: '#f20530',
    borderBottomWidth: 2,
  },
  pager_disabled: {
    width: '10%',
    height: '100%',
    margin: '5%',
    borderBottomColor: '#717171',
    borderBottomWidth: 2,
  },
  btn: {
    marginTop: 0,
    alignItems: 'center',
    width: '40%',
    backgroundColor: '#f20530',
  },
  btn_disabled: {
    marginTop: 0,
    alignItems: 'center',
    width: '40%',
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
});
