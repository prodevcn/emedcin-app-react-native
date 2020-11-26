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

export default class DoctorSecondScreen extends Component {
  constructor() {
    super();
    this.state = {
      homeaddress: 'xxxx',
      nationality: 'xxxx',
      mdcn: 'xxx',
      age: 'xxx',
      phone: 'xxx',
      gender: '',
    };
  }

  onValueChange(value) {
    this.setState({
      gender: value,
    });
    console.log();
  }
  next() {
    let userInfo = this.props.route.params.userInfo;
    userInfo.homeaddress = this.state.homeaddress;
    userInfo.nationality = this.state.nationality;
    userInfo.mdcn = this.state.mdcn;
    userInfo.age = this.state.age;
    userInfo.phone = this.state.phone;
    userInfo.gender = this.state.gender;
    console.log(userInfo);
    this.props.navigation.navigate('DoctorThird', {userInfo: userInfo});
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
              <View style={style.pager_disabled} />
            </View>
          </View>
          <View style={style.formSection}>
            <TextInput
              style={style.formItem}
              placeholder="home address"
              onChangeText={(input) => this.setState({homeaddress: input})}
              value={this.state.homeaddress}
            />
            <TextInput
              style={style.formItem}
              placeholder="nationality"
              onChangeText={(input) => this.setState({nationality: input})}
              value={this.state.nationality}
            />
            <TextInput
              style={style.formItem}
              placeholder="MDCN reg no"
              onChangeText={(input) => this.setState({mdcn: input})}
              value={this.state.mdcn}
            />
            <TextInput
              style={style.formItem}
              placeholder="age"
              onChangeText={(input) => this.setState({age: input})}
              value={this.state.age}
            />
            <TextInput
              style={style.formItem}
              placeholder="phone number"
              onChangeText={(input) => this.setState({phone: input})}
              value={this.state.phone}
            />
            <View style={style.formItem}>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.gender}
                onValueChange={this.onValueChange.bind(this)}>
                <Picker.Item label="Please select your gender" value="" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </View>
            <TouchableOpacity
              style={
                this.state.homeaddress !== '' &&
                this.state.nationality !== '' &&
                this.state.mdcn !== '' &&
                this.state.age !== '' &&
                this.state.phone !== '' &&
                this.state.gender !== ''
                  ? style.btn
                  : style.btn_disabled
              }
              disabled={
                this.state.homeaddress !== '' &&
                this.state.nationality !== '' &&
                this.state.mdcn !== '' &&
                this.state.age !== '' &&
                this.state.phone !== '' &&
                this.state.gender !== ''
                  ? false
                  : true
              }
              onPress={() => {
                this.next();
              }}>
              <Text style={style.confirmBtn}>next</Text>
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
});
