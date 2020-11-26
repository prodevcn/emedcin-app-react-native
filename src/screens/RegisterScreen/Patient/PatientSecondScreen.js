import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import {Picker} from 'native-base';
import Toast from 'react-native-simple-toast';
// import GLOBALS from '../../../constants/Globals';
import {connect} from 'react-redux';
import {register} from '../../../actions/auth';

class PatientSecondScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeaddress: '',
      nationality: '',
      occupation: '',
      age: '',
      phone: '',
      gender: '',
    };
  }

  onValueChange(value) {
    this.setState({gender: value});
  }
  submit() {
    let userInfo = this.props.route.params.userInfo;
    userInfo.homeaddress = this.state.homeaddress;
    userInfo.nationality = this.state.nationality;
    userInfo.occupation = this.state.occupation;
    userInfo.age = this.state.age;
    userInfo.phone = this.state.phone;
    userInfo.gender = this.state.gender;
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
          this.props.navigation.navigate('PatientFirst', {
            role: this.props.userInfo.role,
          });
        } else if (data.msg === 'Email is invalid') {
          this.props.navigation.navigate('PatientFirst', {
            role: this.props.userInfo.role,
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
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
              <View style={style.pager} />
            </View>
          </View>
          <View style={style.formSection}>
            <TextInput
              style={style.formItem}
              placeholder="home address"
              onChangeText={(input) => this.setState({homeaddress: input})}
            />
            <TextInput
              style={style.formItem}
              placeholder="nationality"
              onChangeText={(input) => this.setState({nationality: input})}
            />
            <TextInput
              style={style.formItem}
              placeholder="occupation"
              onChangeText={(input) => this.setState({occupation: input})}
            />
            <TextInput
              style={style.formItem}
              placeholder="age"
              onChangeText={(input) => this.setState({age: input})}
            />
            <TextInput
              style={style.formItem}
              placeholder="phone number"
              onChangeText={(input) => this.setState({phone: input})}
            />
            <View style={style.formItem}>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.gender}
                onValueChange={this.onValueChange.bind(this)}>
                <Picker.Item label="Please select your gender" value="title" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </View>
            <TouchableOpacity
              style={
                this.state.homeaddress !== '' &&
                this.state.nationality !== '' &&
                this.state.occupation !== '' &&
                this.state.age !== '' &&
                this.state.phone !== '' &&
                this.state.gender !== ''
                  ? style.btn
                  : style.btn_disabled
              }
              disabled={
                this.state.homeaddress !== '' &&
                this.state.nationality !== '' &&
                this.state.occupation !== '' &&
                this.state.age !== '' &&
                this.state.phone !== '' &&
                this.state.gender !== ''
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
export default connect(mapStateToProps, {register})(PatientSecondScreen);
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
    backgroundColor: 'purple',
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
