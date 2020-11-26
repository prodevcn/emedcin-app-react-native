import React, {Component} from 'react';
import {
  View,
  Text,
  // TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  // FlatList,
} from 'react-native';
import Textarea from 'react-native-textarea';
// import {CheckBox} from 'react-native-elements';
import {Picker} from 'native-base';
import {DoctorType} from '../../constants/DoctorType';
import {SpecializedArea} from '../../constants/SpecializedArea';
import GLOBALS from '../../constants/Globals';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';

export default class DoctorThirdScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      area: '',
      area_list: '',
      specialist: '',
      yesChecked: false,
      noChecked: false,
      text: this.props.route.params.userInfo.text,
      userInfo: this.props.route.params.userInfo,
      newUserInfo: this.props.route.params.newUserInfo,
    };
  }

  onValueChange(value) {
    this.setState({
      type: value,
    });
    console.log();
  }
  onValueChange1(value) {
    this.setState({
      area: value,
    });
    console.log();
  }
  submit() {
    // this.props.navigation.navigate('RegisterSuccess');
    let newUserInfo = this.props.route.params.newUserInfo;
    newUserInfo.type = this.state.type;
    newUserInfo.area = this.state.area;
    newUserInfo.text = this.state.text;
    console.log(newUserInfo);
    let url = GLOBALS.BASE_URL + 'user/user-update';
    console.log(newUserInfo);
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUserInfo),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.email === 'Email already exists') {
          Toast.show('Email already exist', Toast.LONG, Toast.TOP);
        } else {
          // console.log(responseJson._id);
          // this.props.navigation.navigate('Profile', {
          //   userInfo: newUserInfo,
          // });
          if (responseJson.success) {
            let key;
            let userInfo = this.state.userInfo;
            for (key in newUserInfo) {
              if (newUserInfo.hasOwnProperty(key)) {
                userInfo[key] = newUserInfo[key];
              }
            }
            console.log(userInfo);
            (async () => {
              await AsyncStorage.clear();
              try {
                await AsyncStorage.setItem(
                  'userInfo',
                  JSON.stringify(userInfo),
                );
              } catch (e) {
                console.log(e);
              }
            })();
            this.props.navigation.navigate('Profile');
          }
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
            <View style={style.second}>
              <Text style={style.title}>Edit</Text>
              <Text style={style.title_redColor}>Profile</Text>
            </View>
            <View style={style.pagerBar}>
              <View style={style.pager} />
              <View style={style.pager} />
              <View style={style.pager} />
            </View>
          </View>
          <View style={style.formSection}>
            <View style={style.formItem}>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.type}
                onValueChange={this.onValueChange.bind(this)}>
                <Picker.Item label="type of doctor" value="" />
                {DoctorType.map((item, index) => {
                  return <Picker.Item label={item} value={item} key={index} />;
                })}
              </Picker>
            </View>
            <View style={style.formItem}>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.area}
                onValueChange={this.onValueChange1.bind(this)}>
                <Picker.Item label="area of specialization" value="" />
                {SpecializedArea.map((item, index) => {
                  return <Picker.Item label={item} value={item} key={index} />;
                })}
              </Picker>
            </View>
            <Textarea
              containerStyle={style.textareaContainer}
              style={style.textarea}
              // onChangeText={this.onChange}
              defaultValue={this.state.text}
              maxLength={120}
              placeholder={''}
              placeholderTextColor={'#717171'}
              underlineColorAndroid={'transparent'}
              value={this.state.text}
              onChangeText={(input) => this.setState({text: input})}
            />
            <TouchableOpacity
              style={
                this.state.type !== '' &&
                this.state.area !== '' &&
                this.state.text !== ''
                  ? style.btn
                  : style.btn_disabled
              }
              disabled={
                this.state.type !== '' &&
                this.state.area !== '' &&
                this.state.text !== ''
                  ? false
                  : true
              }
              onPress={() => {
                this.submit();
              }}>
              <Text style={style.confirmBtn}>submit</Text>
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
  titleSection: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    // backgroundColor: 'yellow',
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
    marginTop: 30,
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
    // backgroundColor: 'green',
    height: '20%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pager: {
    width: '10%',
    height: '100%',
    margin: '5%',
    // backgroundColor: 'purple',
    borderBottomColor: '#f20530',
    borderBottomWidth: 2,
  },
  pager_disabled: {
    width: '10%',
    height: '100%',
    margin: '5%',
    // backgroundColor: 'purple',
    borderBottomColor: '#717171',
    borderBottomWidth: 2,
  },
  btn: {
    marginTop: 0,
    // width: '100%',
    alignItems: 'center',
    width: '40%',
    backgroundColor: '#f20530',
  },
  btn_disabled: {
    marginTop: 0,
    // width: '100%',
    alignItems: 'center',
    width: '40%',
    backgroundColor: '#f20530',
    opacity: 0.5,
  },
  confirmBtn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    // width: '40%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  textareaContainer: {
    borderColor: '#717171',
    borderWidth: 1,
    // borderRadius: 10,
    height: '20%',
    marginTop: 20,
    marginBottom: 20,
  },
  check_row: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
    alignItems: 'center',
  },
  checkText: {
    color: '#717171',
  },
  check_square: {
    // backgroundColor: 'yellow',
  },
  check_area: {
    // flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
