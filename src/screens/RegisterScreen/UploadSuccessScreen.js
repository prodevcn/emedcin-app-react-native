import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
class UploadSuccessScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: this.props.userInfo,
    };
  }
  componentDidMount() {}
  onProceed() {
    (async () => {
      try {
        // if (this.state.userInfo.role === 'patient') {
        //   await this.setState()
        // }
        await AsyncStorage.setItem(
          'userInfo',
          JSON.stringify(this.state.userInfo),
        );
        this.props.navigation.navigate('Main');
      } catch (e) {
        console.log(e);
      }
    })();
  }
  render() {
    return (
      <SafeAreaView style={style.main}>
        <View style={style.container}>
          <View style={style.logoSection}>
            <Image
              style={style.successLogo}
              source={require('../../../assets/images/checked.png')}
            />
            <Text style={style.notify}>Successfully submitted</Text>
          </View>
          <View style={style.titleSection}>
            <View style={style.area1}>
              <Text style={style.title}>Registration</Text>
              <View style={style.second}>
                <Text style={style.title_redColor}>Completed</Text>
              </View>
            </View>
            <View style={style.area2}>
              <TouchableOpacity
                onPress={() => {
                  this.onProceed();
                }}>
                <Text style={style.proceedBtn}>proceed</Text>
              </TouchableOpacity>
            </View>
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
export default connect(mapStateToProps)(UploadSuccessScreen);
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
  area1: {
    flex: 1,
  },
  area2: {
    flex: 1,
  },
  titleSection: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: '10%',
    alignItems: 'center',
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
