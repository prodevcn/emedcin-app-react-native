import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {login} from '../../actions/auth';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'a@m.co',
      password: 'aaaaaa',
    };
  }
  clear = () => {
    this.setState({email: '', password: ''});
  };

  doLogin = () => {
    this.props
      .login(this.state.email, this.state.password)
      .then((data) => {
        Toast.show(data.msg, Toast.LONG, Toast.TOP);
        this.clear();
        if (data.msg === 'login success') {
          this.props.navigation.navigate('Main');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  render() {
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <View style={styles.titleSection}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.title_redColor}>back</Text>
            <Text style={styles.title}>!</Text>
          </View>
          <View style={styles.formSection}>
            <TextInput
              style={styles.formItem}
              placeholder="email address"
              onChangeText={(e) => {
                this.setState({email: e});
              }}
              value={this.state.email}
            />
            <TextInput
              style={styles.formItem}
              placeholder="password"
              onChangeText={(e) => {
                this.setState({password: e});
              }}
              value={this.state.password}
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styles.forgotBtn}
              onPress={() => {
                this.clear();
                this.props.navigation.navigate('ForgotPwd');
              }}>
              <Text style={styles.forgot}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.email === '' || this.state.password === ''
                  ? styles.btn_disabled
                  : styles.btn
              }
              disabled={
                this.state.email === '' || this.state.password === ''
                  ? true
                  : false
              }
              onPress={() => {
                this.doLogin();
              }}>
              <Text style={styles.loginBtn}>login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footer_text}>Don't have an account ?</Text>
            <TouchableOpacity
              onPress={() => {
                this.clear();
                this.props.navigation.navigate('Register');
              }}>
              <Text style={styles.registerBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (store) => {
  const {userInfo} = store.common;
  return {userInfo};
};
export default connect(mapStateToProps, {login})(LoginScreen);
const styles = StyleSheet.create({
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
    flexDirection: 'row',
    paddingTop: 52,
  },

  title: {
    fontSize: 30,
    color: '#024059',
  },
  title_redColor: {
    fontSize: 30,
    color: '#f20530',
    marginLeft: '3%',
  },
  formSection: {
    flex: 4,
    width: '100%',
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
  forgotBtn: {
    width: '50%',
    alignSelf: 'flex-end',
  },
  forgot: {
    textAlign: 'right',
    marginRight: 20,
    color: '#024059',
  },
  btn: {
    marginTop: 50,
    width: '40%',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#f20530',
  },
  btn_disabled: {
    marginTop: 50,
    width: '40%',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#f20530',
    opacity: 0.5,
  },
  loginBtn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    width: '100%',
    padding: 5,
  },
  footer: {
    flex: 2,
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
