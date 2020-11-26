import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

export default class DeleteSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Onboarding');
    }, 2000);
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
            <Text style={style.notify}>Successfully deleted your account</Text>
          </View>
          <View style={style.titleSection}>
            <Text style={style.title}>Hope we</Text>
            <View style={style.second}>
              <Text style={style.title_redColor}>see you soon</Text>
            </View>
            <Text style={style.description}>
              You will be redirected to the welcome screen
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const win = Dimensions.get('window');
const style = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '60%',
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
    alignSelf: 'center',
    textAlign: 'center',
  },
  titleSection: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  second: {
    alignItems: 'center',
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
    textAlign: 'center',
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
