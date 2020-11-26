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
// import GLOBALS from '../../constants/Globals';
// import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {updatePatient} from '../../actions/update';
// import EditProfileFirstPage from './EditProfileFirstPage';

class EditProfileSecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: this.props.userInfo,
      newUserInfo: this.props.userInfo,
      homeaddress: this.props.userInfo.homeaddress,
      nationality: this.props.userInfo.nationality,
      occupation: this.props.userInfo.occupation,
      age: this.props.userInfo.age,
      phone: this.props.userInfo.phone,
      gender: this.props.userInfo.gender,
      mdcn: this.props.userInfo.mdcn,
    };
    console.log(this.props.userInfo);
  }
  next() {
    let newUserInfo = this.props.userInfo;
    newUserInfo.homeaddress = this.state.homeaddress;
    newUserInfo.nationality = this.state.nationality;
    newUserInfo.mdcn = this.state.mdcn;
    newUserInfo.age = this.state.age;
    newUserInfo.phone = this.state.phone;
    newUserInfo.gender = this.state.gender;
    this.props.navigation.navigate('EditProfileThirdPage', {
      userInfo: this.state.userInfo,
      newUserInfo: newUserInfo,
    });
  }
  save() {
    if (this.state.userInfo.role === 'doctor') {
      Toast.show('User information saved !', Toast.LONG, Toast.TOP);
    } else {
      let newUserInfo = this.props.userInfo;
      newUserInfo.homeaddress = this.state.homeaddress;
      newUserInfo.nationality = this.state.nationality;
      newUserInfo.occupation = this.state.occupation;
      newUserInfo.age = this.state.age;
      newUserInfo.phone = this.state.phone;
      newUserInfo.gender = this.state.gender;
      console.log('Priyanka ===============>', newUserInfo);
      this.props.updatePatient(newUserInfo);
      //   console.log(newUserInfo);
      //   let url = GLOBALS.BASE_URL + 'user/user-update';
      //   fetch(url, {
      //     method: 'POST',
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(newUserInfo),
      //   })
      //     .then((response) => response.json())
      //     .then((responseJson) => {
      //       console.log(responseJson);
      //       if (responseJson.success) {
      //         let key;
      //         let userInfo = this.state.userInfo;
      //         for (key in newUserInfo) {
      //           if (newUserInfo.hasOwnProperty(key)) {
      //             userInfo[key] = newUserInfo[key];
      //           }
      //         }
      //         console.log(userInfo);
      //         (async () => {
      //           await AsyncStorage.clear();
      //           try {
      //             await AsyncStorage.setItem(
      //               'userInfo',
      //               JSON.stringify(userInfo),
      //             );
      //           } catch (e) {
      //             console.log(e);
      //           }
      //         })();
      //         this.props.navigation.navigate('Profile');
      //       }
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
    }
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
            {this.state.userInfo.role === 'patient' ? (
              <View style={style.pagerBar}>
                <View style={style.pager} />
                <View style={style.pager} />
              </View>
            ) : (
              <View style={style.pagerBar}>
                <View style={style.pager} />
                <View style={style.pager} />
                <View style={style.pager_disabled} />
              </View>
            )}
          </View>
          <View style={style.formSection}>
            {/* <TextInput style={style.formItem} placeholder="email address" /> */}
            <TextInput
              style={style.formItem}
              placeholder="home address"
              onChangeText={(input) => {
                this.setState({homeaddress: input});
              }}
              value={this.state.homeaddress}
            />
            <TextInput
              style={style.formItem}
              placeholder="nationality"
              onChangeText={(input) => {
                this.setState({nationality: input});
              }}
              value={this.state.nationality}
            />
            {this.state.userInfo.role === 'patient' ? (
              <TextInput
                style={style.formItem}
                placeholder="occupation"
                onChangeText={(input) => {
                  this.setState({occupation: input});
                }}
                value={this.state.occupation}
              />
            ) : (
              <TextInput
                style={style.formItem}
                placeholder="MDCN"
                onChangeText={(input) => {
                  this.setState({mdcn: input});
                }}
                value={this.state.mdcn}
              />
            )}
            <TextInput
              style={style.formItem}
              placeholder="age"
              onChangeText={(input) => {
                this.setState({age: input});
              }}
              value={this.state.age}
            />
            <TextInput
              style={style.formItem}
              placeholder="phone number"
              onChangeText={(input) => {
                this.setState({phone: input});
              }}
              value={this.state.phone}
            />
            <TextInput
              style={style.formItem}
              placeholder="Please select to your gender"
              onChangeText={(input) => {
                this.setState({gender: input});
              }}
              value={this.state.gender}
            />
            <View style={style.btnGroup}>
              <TouchableOpacity
                style={style.btn_1}
                onPress={() => {
                  this.props.navigation.goBack();
                }}>
                <Text style={style.nextBtn}>previous</Text>
              </TouchableOpacity>
              {this.props.userInfo.role === 'doctor' ? (
                <TouchableOpacity
                  style={style.btn_1}
                  onPress={() => {
                    this.next();
                  }}>
                  <Text style={style.nextBtn}>next</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={style.btn}
                  onPress={() => {
                    this.save();
                  }}>
                  <Text style={style.confirmBtn}>save</Text>
                </TouchableOpacity>
              )}
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
export default connect(mapStateToProps, {updatePatient})(EditProfileSecondPage);
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
  changeText: {
    color: '#f20530',
  },
  formSection: {
    flex: 4,
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
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
    width: '30%',
    backgroundColor: '#f20530',
  },
  btn_1: {
    marginTop: 0,
    // width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#024059',
    width: '30%',
    backgroundColor: 'transparent',
  },
  btnGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  confirmBtn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  nextBtn: {
    textAlign: 'center',
    color: '#024059',
    fontSize: 12,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
