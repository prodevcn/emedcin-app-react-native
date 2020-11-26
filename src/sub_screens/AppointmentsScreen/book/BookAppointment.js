import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
export default class BookAppointment extends Component {
  state = {
    isHomeChecked: false,
    isVideoChecked: false,
    appointmentType: '',
  };
  setSelection() {
    this.setState({isSelected: !this.state.isSelected});
  }
  event() {
    console.log('checked');
  }
  render() {
    return (
      <SafeAreaView style={style.main}>
        <View style={style.container}>
          <View style={style.titleSection}>
            <Text style={style.title}>What type of </Text>
            <View style={style.second}>
              <Text style={style.title_redColor}>Appointment</Text>
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
                  checked={this.state.isHomeChecked}
                  onPress={() => {
                    if (this.state.isHomeChecked === false) {
                      this.setState({
                        isHomeChecked: !this.state.isHomeChecked,
                        isVideoChecked: false,
                        appointmentType: 'Home',
                      });
                    } else {
                      this.setState({
                        isHomeChecked: !this.state.isHomeChecked,
                        type: '',
                      });
                    }
                  }}
                />
              </View>
              <Text style={style.checkText}>Home Appointment</Text>
            </View>
            <View style={style.check_row}>
              <View style={style.check_square}>
                <CheckBox
                  checkedIcon="check"
                  checkedColor="#f20530"
                  checked={this.state.isVideoChecked}
                  onPress={() => {
                    if (this.state.isVideoChecked === false) {
                      this.setState({
                        isVideoChecked: !this.state.isVideoChecked,
                        isHomeChecked: false,
                        appointmentType: 'Video',
                      });
                    } else {
                      this.setState({
                        isVideoChecked: !this.state.isVideoChecked,
                        type: '',
                      });
                    }
                  }}
                />
              </View>
              <Text style={style.checkText}>Video Appointment</Text>
            </View>
          </View>
          <View style={style.footerSection}>
            <TouchableOpacity
              style={style.btn}
              onPress={() => {
                this.props.navigation.navigate('BookHomeAppointmentPage1', {
                  type: this.state.appointmentType,
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
    // backgroundColor: 'blue',
    alignItems: 'center',
  },
  checkText: {
    color: '#717171',
  },
  check_square: {
    // backgroundColor: 'yellow',
  },
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
    flex: 3,
    width: '100%',
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
    flex: 3,
    width: '100%',
    // backgroundColor: 'aqua',
    alignItems: 'flex-start',
  },
  btn: {
    marginTop: 30,
    // width: '100%',
    alignItems: 'center',
  },
  proceedBtn: {
    backgroundColor: '#f20530',
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    // width: '40%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  footerSection: {
    flex: 2,
    // backgroundColor: 'red',
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
