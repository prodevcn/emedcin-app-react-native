import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
const win = Dimensions.get('window');
import Textarea from 'react-native-textarea';
import GLOBALS from '../../constants/Globals';
import AsyncStorage from '@react-native-community/async-storage';
export default class DeleteAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      userInfo: this.props.route.params.userInfo,
    };
  }
  delete() {
    let url = GLOBALS.BASE_URL + 'user/user-delete';
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.userInfo),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        (async () => {
          await AsyncStorage.clear();
          this.props.navigation.navigate('DeleteSuccess');
        })();
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
            <Text style={style.title}>Delete your</Text>
            <View style={style.second}>
              <Text style={style.title_redColor}>Account</Text>
            </View>
            <Textarea
              containerStyle={style.textareaContainer}
              defaultValue={this.state.text}
              maxLength={120}
              placeholder={'Please tell us why you want to delete your account'}
              placeholderTextColor={'#717171'}
              underlineColorAndroid={'transparent'}
              value={this.state.text}
              onChangeText={(input) => this.setState({text: input})}
            />
          </View>
          <View style={style.footerSection}>
            <View style={style.btnGroup}>
              <TouchableOpacity
                style={style.btn_1}
                onPress={() => {
                  this.props.navigation.goBack();
                }}>
                <Text style={style.nextBtn}>cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.btn}
                onPress={() => {
                  this.delete();
                }}>
                <Text style={style.confirmBtn}>delete</Text>
              </TouchableOpacity>
            </View>
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
  textareaContainer: {
    borderColor: '#717171',
    borderWidth: 1,
    height: '50%',
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleSection: {
    flex: 2,
    width: '100%',
  },
  footerSection: {
    flex: 1,
    width: '100%',
  },
  btnGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  second: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    color: '#024059',
    marginRight: 10,
  },
  title_redColor: {
    fontSize: 28,
    color: '#f20530',
  },
  description: {
    marginTop: 20,
    color: '#717171',
  },
  avatar_area: {
    alignItems: 'center',
  },
  photo: {
    width: win.width * 0.2,
    height: win.width * 0.2,
    marginVertical: 10,
  },
  changeText: {
    color: '#f20530',
  },
  formSection: {
    flex: 3,
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
  btn_1: {
    marginTop: 0,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#024059',
    width: '40%',
    backgroundColor: 'transparent',
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
  nextBtn: {
    textAlign: 'center',
    color: '#024059',
    fontSize: 24,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
