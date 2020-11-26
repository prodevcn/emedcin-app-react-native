import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {connect} from 'react-redux';
class RegisterSuccessScreen extends Component {
  constructor() {
    super();
    // this.state = {
    //   userInfo: this.props.route.params.userInfo,
    // };
  }
  componentDidMount() {
    setTimeout(() => {
      if (this.props.userInfo.role === 'patient') {
        this.props.navigation.navigate('UploadSuccess');
      } else {
        this.props.navigation.navigate('ID');
      }
      console.log(this.props.userInfo);
    }, 3000);
  }
  render() {
    return (
      <View style={style.main} activeOpacity={0.6}>
        <View style={style.container}>
          <View style={style.logoSection}>
            <Image
              style={style.successLogo}
              source={require('../../../assets/images/checked.png')}
            />
            <Text style={style.notify}>Successfully submitted</Text>
          </View>
          <View style={style.titleSection}>
            <Text style={style.title}>Kindly confirm </Text>
            <View style={style.second}>
              <Text style={style.title}>your</Text>
              <Text style={style.title_redColor}>Email</Text>
            </View>
            <Text style={style.description}>
              A link has been to your registered email address. Kindly click to
              confirm your email address and complete your registration
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (store) => {
  const {userInfo} = store.common;
  return {userInfo};
};
export default connect(mapStateToProps)(RegisterSuccessScreen);
const win = Dimensions.get('window');
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
  logoSection: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  successLogo: {
    width: win.width * 0.5,
    height: win.width * 0.5,
    marginBottom: 30,
  },
  notify: {
    color: '#717171',
  },
  titleSection: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  second: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 28,
    color: '#024059',
  },
  title_redColor: {
    marginLeft: 10,
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
  },
  proceedBtn: {
    backgroundColor: '#f20530',
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
