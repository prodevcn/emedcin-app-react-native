import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default class InstitutionRegisterFirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.route.params.type,
      institution: {
        type: this.props.route.params.type,
        name: 'Domestic Hospital',
        address: 'Lagos',
        website: 'D-Hospital.com',
        email: 'dhospital@mail.com',
        phoneNumber: '12136770354',
        rcNumber: 'rc-123456',
      },
    };
  }
  next() {
    this.props.navigation.navigate('InstitutionReg2', {
      institution: this.state.institution,
    });
  }
  render() {
    return (
      <SafeAreaView style={style.main}>
        <View style={style.container}>
          <View style={style.titleSection}>
            <View style={style.titleArea}>
              <Text style={style.title}>Register</Text>
              <View style={style.second}>
                <Text style={style.title_redColor}>Institution</Text>
              </View>
            </View>
            <View style={style.pagerBar}>
              <View style={style.pager} />
              <View style={style.pager_disabled} />
              <View style={style.pager_disabled} />
            </View>
          </View>
          <View style={style.formSection}>
            <TextInput
              style={style.formItem}
              placeholder="Institution name"
              value={this.state.institution.name}
              onChangeText={(input) => {
                this.setState({
                  institution: {...this.state.institution, name: input},
                });
              }}
            />
            <TextInput
              style={style.formItem}
              placeholder="address"
              value={this.state.institution.address}
              onChangeText={(input) => {
                this.setState({
                  institution: {...this.state.institution, address: input},
                });
              }}
            />
            <TextInput
              style={style.formItem}
              placeholder="website"
              value={this.state.institution.website}
              onChangeText={(input) => {
                this.setState({
                  institution: {...this.state.institution, website: input},
                });
              }}
            />
            <TextInput
              style={style.formItem}
              placeholder="contact email"
              value={this.state.institution.email}
              onChangeText={(input) => {
                this.setState({
                  institution: {...this.state.institution, email: input},
                });
              }}
            />
            <TextInput
              style={style.formItem}
              placeholder="phone number"
              value={this.state.institution.phoneNumber}
              onChangeText={(input) => {
                this.setState({
                  institution: {...this.state.institution, phoneNumber: input},
                });
              }}
            />
            <TextInput
              style={style.formItem}
              placeholder="RC number"
              value={this.state.institution.rcNumber}
              onChangeText={(input) => {
                this.setState({
                  institution: {...this.state.institution, rcNumber: input},
                });
              }}
            />
            <TouchableOpacity
              style={
                this.state.institution.name !== '' &&
                this.state.institution.address !== '' &&
                this.state.institution.email !== '' &&
                this.state.institution.website !== '' &&
                this.state.institution.phoneNumber !== '' &&
                this.state.institution.rcNumber !== ''
                  ? style.btn
                  : style.btn_disabled
              }
              disabled={
                this.state.institution.name !== '' &&
                this.state.institution.address !== '' &&
                this.state.institution.email !== '' &&
                this.state.institution.website !== '' &&
                this.state.institution.phoneNumber !== '' &&
                this.state.institution.rcNumber !== ''
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
    // backgroundColor: 'yellow',
  },
  titleArea: {
    flexDirection: 'row',
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
    opacity: 0.5,
    alignItems: 'center',
    width: '40%',
    backgroundColor: '#f20530',
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
});
