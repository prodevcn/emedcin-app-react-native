import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {CheckBox} from 'react-native-elements';
import Textarea from 'react-native-textarea';

export default class BookHomeAppointmentPage2 extends Component {
  state = {
    isPatientChecked: false,
    isDoctorChecked: false,
    nextScreen: '',
  };
  setSelection() {
    this.setState({isSelected: !this.state.isSelected});
  }
  render() {
    return (
      <SafeAreaView style={style.main}>
        <View style={style.container}>
          <View style={style.titleSection}>
            <View style={style.second}>
              <Text style={style.title}>Book </Text>
              <Text style={style.title_redColor}>Home</Text>
            </View>
            <Text style={style.title}>Appointment </Text>
            <View style={style.pagerBar}>
              <View style={style.pager} />
              <View style={style.pager} />
            </View>
          </View>
          <View style={style.formSection}>
            <View style={style.check_row}>
              <View style={style.check_square}>
                <CheckBox
                  checkedIcon="check"
                  checkedColor="#f20530"
                  checked={this.state.isPatientChecked}
                  onPress={() =>
                    this.setState({
                      isPatientChecked: !this.state.isPatientChecked,
                      nextScreen: 'PatientFirst',
                    })
                  }
                />
              </View>
              <Text style={style.checkText}>Use Profile Address</Text>
            </View>
            <View style={style.searchArea}>
              <TextInput
                style={style.formItem}
                placeholder="or enter different address"
              />
            </View>
            <Textarea
              containerStyle={style.textareaContainer}
              style={style.textarea}
              onChangeText={this.onChange}
              defaultValue={this.state.text}
              maxLength={120}
              placeholder={'Reason(s) for appointment'}
              placeholderTextColor={'#717171'}
              underlineColorAndroid={'transparent'}
              fontFamily={'CenturyGothic'}
            />
          </View>
          <View style={style.footerSection}>
            <TouchableOpacity
              style={style.btn}
              onPress={() => {
                this.props.navigation.navigate('BookSuccess');
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
  searchArea: {
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: 'purple',
    alignItems: 'center',
    borderColor: '#717171',
    borderWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  check_row: {
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  checkText: {
    color: '#717171',
  },
  check_square: {
    // backgroundColor: 'yellow',
  },
  titleSection: {
    flex: 1,
    width: '100%',
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
    flex: 3,
    width: '100%',
    alignItems: 'center',
    // backgroundColor: 'tomato',
  },
  footerSection: {
    flex: 1,
    justifyContent: 'center',
  },
  formItem: {
    // width: '100%',
    // borderColor: '#717171',
    // borderWidth: 1,
    fontSize: 16,
    // marginBottom: 15,
    fontFamily: 'CenturyGothic',
    paddingLeft: 20,
    // backgroundColor: 'tomato',
    width: '90%',
  },
  textareaContainer: {
    borderColor: '#717171',
    borderWidth: 1,
    // borderRadius: 10,
    paddingHorizontal: 10,
    height: '50%',
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'CenturyGothic',
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
