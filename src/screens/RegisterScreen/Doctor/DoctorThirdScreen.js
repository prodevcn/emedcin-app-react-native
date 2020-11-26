import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Textarea from 'react-native-textarea';
import {CheckBox} from 'react-native-elements';
import {Picker} from 'native-base';
import {DoctorType} from '../../../constants/DoctorType';
import {SpecializedArea} from '../../../constants/SpecializedArea';
import GLOBALS from '../../../constants/Globals';
import Toast from 'react-native-simple-toast';
import {connect} from 'react-redux';
import {register} from '../../../actions/auth';
class DoctorThirdScreen extends Component {
  constructor() {
    super();
    this.state = {
      type: '',
      area: '',
      area_list: '',
      specialist: '',
      yesChecked: false,
      noChecked: false,
      text: 'xxxxxxx',
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
    let userInfo = this.props.route.params.userInfo;
    userInfo.type = this.state.type;
    userInfo.specialist = this.state.specialist;
    userInfo.area = this.state.area;
    userInfo.text = this.state.text;
    this.props
      .register(userInfo)
      .then((data) => {
        console.log(data);
        Toast.show(data.msg, Toast.LONG, Toast.TOP);
        if (data.msg === 'signup success') {
          this.props.navigation.navigate('RegisterSuccess', {
            userInfo: this.props.userInfo,
          });
        } else if (data.msg === 'Email already exists') {
          this.props.navigation.navigate('DoctorFirst', {
            role: this.props.userInfo.role,
          });
        } else if (data.msg === 'Email is invalid') {
          this.props.navigation.navigate('DoctorFirst', {
            role: this.props.userInfo.role,
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
    // console.log(userInfo);
    // let url = GLOBALS.BASE_URL + 'user/register';
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userInfo),
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((responseJson) => {
    //     console.log(responseJson);
    //     if (responseJson.email === 'Email already exists') {
    //       Toast.show('Email already exist', Toast.LONG, Toast.TOP);
    //       this.props.navigation.navigate('DoctorFirst');
    //     } else if (responseJson.email === 'Email is invalid') {
    //       Toast.show('Email is invalid', Toast.LONG, Toast.TOP);
    //       this.props.navigation.navigate('DoctorFirst');
    //     } else {
    //       console.log(responseJson._id);
    //       this.props.navigation.navigate('RegisterSuccess', {
    //         userInfo: responseJson,
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }
  render() {
    return (
      <SafeAreaView style={style.main}>
        <View style={style.container}>
          <View style={style.titleSection}>
            <Text style={style.title}>Register as a </Text>
            <View style={style.second}>
              <Text style={style.title_redColor}>Doctor</Text>
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
            <View style={style.check_area}>
              <Text style={style.checkText}>are you a Specialist ?</Text>
              <View style={style.check_row}>
                <View style={style.check_square}>
                  <CheckBox
                    checkedIcon="check"
                    checkedColor="#f20530"
                    checked={this.state.yesChecked}
                    onPress={() => {
                      if (this.state.yesChecked === false) {
                        this.setState({
                          yesChecked: !this.state.yesChecked,
                          noChecked: false,
                          specialist: 'true',
                        });
                      } else {
                        this.setState({
                          yesChecked: !this.state.yesChecked,
                          specialist: '',
                        });
                      }
                    }}
                  />
                </View>
                <Text style={style.checkText}>yes</Text>
              </View>
              <View style={style.check_row}>
                <View style={style.check_square}>
                  <CheckBox
                    checkedIcon="check"
                    checkedColor="#f20530"
                    checked={this.state.noChecked}
                    onPress={() => {
                      if (this.state.noChecked === false) {
                        this.setState({
                          noChecked: !this.state.noChecked,
                          yesChecked: false,
                          specialist: 'false',
                        });
                      } else {
                        this.setState({
                          noChecked: !this.state.noChecked,
                          specialist: '',
                        });
                      }
                    }}
                  />
                </View>
                <Text style={style.checkText}>no</Text>
              </View>
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
                this.state.specialist !== '' &&
                this.state.area !== '' &&
                this.state.text !== ''
                  ? style.btn
                  : style.btn_disabled
              }
              disabled={
                this.state.type !== '' &&
                this.state.specialist !== '' &&
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
const mapStateToProps = (store) => {
  const {userInfo} = store.common;
  return {userInfo};
};
export default connect(mapStateToProps, {register})(DoctorThirdScreen);
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
  textareaContainer: {
    borderColor: '#717171',
    borderWidth: 1,
    height: '20%',
    marginTop: 20,
    marginBottom: 20,
  },
  check_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkText: {
    color: '#717171',
  },
  check_area: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
