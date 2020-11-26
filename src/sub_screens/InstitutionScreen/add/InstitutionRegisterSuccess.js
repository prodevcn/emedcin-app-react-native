import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default class InstitutionRegisterSuccess extends Component {
  componentDidMount() {
    console.log('this is Did mount');
    // setTimeout(() => {
    //   this.props.navigation.navigate('ID');
    // }, 3000);
  }
  render() {
    return (
      <View style={style.main} activeOpacity={0.6}>
        <View style={style.container}>
          <View style={style.logoSection}>
            <Image
              style={style.successLogo}
              source={require('../../../../assets/images/checked.png')}
            />
            <Text style={style.notify}>Institution Created</Text>
          </View>
          <View style={style.titleSection}>
            <View style={style.letterArea}>
              <Text style={style.title}>Awaiting</Text>
              <View style={style.second}>
                <Text style={style.title_redColor}>Verification</Text>
              </View>
            </View>
            <View style={style.btnArea}>
              <TouchableOpacity
                style={style.proceedBtn}
                onPress={() => {
                  this.props.navigation.navigate('Home');
                }}>
                <Text style={style.btnText}>proceed</Text>
              </TouchableOpacity>
            </View>
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
    // backgroundColor: 'purple',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  letterArea: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
  },
  btnArea: {
    flex: 1,
  },
  logoSection: {
    flex: 1,
    // backgroundColor: 'tomato',
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'tomato',
  },
  second: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 28,
    color: '#024059',
  },
  title_redColor: {
    // marginLeft: 10,
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
  btn: {
    marginTop: 30,
    // width: '100%',
    alignItems: 'center',
  },
  proceedBtn: {
    backgroundColor: '#f20530',
    textAlign: 'center',
    // width: '40%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 24,
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
