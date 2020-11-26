import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
export default class RegisterScreen extends Component {
  state = {
    isPatientChecked: false,
    isDoctorChecked: false,
    nextScreen: '',
    role: '',
  };
  event() {
    console.log('checked');
  }
  render() {
    return (
      <SafeAreaView style={style.main}>
        <View style={style.container}>
          <View style={style.titleSection}>
            <Text style={style.title}>How do you want </Text>
            <View style={style.second}>
              <Text style={style.title}>to use</Text>
              <Text style={style.title_redColor}>eMedcin</Text>
              <Text style={style.title}>?</Text>
            </View>
            <Text style={style.description}>Please select one</Text>
          </View>
          <View style={style.formSection}>
            <View style={style.check_row}>
              <View style={style.check_square}>
                <CheckBox
                  checkedIcon="check"
                  checkedColor="#f20530"
                  checked={this.state.isPatientChecked}
                  onPress={() => {
                    if (this.state.isPatientChecked === false) {
                      this.setState({
                        isPatientChecked: !this.state.isPatientChecked,
                        isDoctorChecked: false,
                        role: 'patient',
                        nextScreen: 'PatientFirst',
                      });
                    } else {
                      this.setState({
                        isPatientChecked: !this.state.isPatientChecked,
                        nextScreen: '',
                        role: '',
                      });
                    }
                  }}
                />
              </View>
              <Text style={style.checkText}>as a Patient</Text>
            </View>
            <View style={style.check_row}>
              <View style={style.check_square}>
                <CheckBox
                  checkedIcon="check"
                  checkedColor="#f20530"
                  checked={this.state.isDoctorChecked}
                  onPress={() => {
                    if (this.state.isDoctorChecked === false) {
                      this.setState({
                        isDoctorChecked: !this.state.isDoctorChecked,
                        isPatientChecked: false,
                        role: 'doctor',
                        nextScreen: 'DoctorFirst',
                      });
                    } else {
                      this.setState({
                        isDoctorChecked: !this.state.isDoctorChecked,
                        nextScreen: '',
                        role: '',
                      });
                    }
                  }}
                />
              </View>
              <Text style={style.checkText}>as a Doctor</Text>
            </View>
          </View>
          <View style={style.footerSection}>
            <TouchableOpacity
              style={
                this.state.isPatientChecked === false &&
                this.state.isDoctorChecked === false
                  ? style.btn_disabled
                  : style.btn
              }
              disabled={
                this.state.isPatientChecked === false &&
                this.state.isDoctorChecked === false
                  ? true
                  : false
              }
              onPress={() => {
                this.props.navigation.navigate(this.state.nextScreen, {
                  role: this.state.role,
                });
              }}>
              <Text style={style.proceedBtn}>proceed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  check_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkText: {
    color: '#717171',
  },
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
    flex: 3,
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
    marginLeft: 10,
    fontSize: 28,
    color: '#f20530',
  },
  description: {
    marginTop: 20,
    color: '#717171',
  },
  formSection: {
    flex: 3,
    width: '100%',
    alignItems: 'flex-start',
  },
  btn: {
    marginTop: 30,
    backgroundColor: '#f20530',
    alignItems: 'center',
  },
  btn_disabled: {
    marginTop: 30,
    backgroundColor: '#f20530',
    opacity: 0.7,
    alignItems: 'center',
  },
  proceedBtn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  footerSection: {
    flex: 2,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
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
