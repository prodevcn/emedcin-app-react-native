import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
export default class InstitutionTypeScreen extends Component {
  state = {
    isHospitalChecked: false,
    isHMOChecked: false,
    isCentreChecked: false,
    type: '',
  };
  render() {
    return (
      <SafeAreaView style={style.main}>
        <View style={style.container}>
          <View style={style.titleSection}>
            <View style={style.second}>
              <Text style={style.title}>Type of</Text>
              <Text style={style.title_redColor}>Institution</Text>
            </View>
            <Text style={style.description}>Please select one</Text>
          </View>
          <View style={style.formSection}>
            <View style={style.check_row}>
              <View style={style.check_square}>
                <CheckBox
                  checkedIcon="check"
                  checkedColor="#f20530"
                  checked={this.state.isHospitalChecked}
                  onPress={() => {
                    if (this.state.isHospitalChecked === false) {
                      this.setState({
                        isHospitalChecked: !this.state.isHospitalChecked,
                        isHMOChecked: false,
                        isCentreChecked: false,
                        type: 'Hospital',
                      });
                    } else {
                      this.setState({
                        isHospitalChecked: !this.state.isHospitalChecked,
                        type: '',
                      });
                    }
                  }}
                />
              </View>
              <Text style={style.checkText}>Hospital</Text>
            </View>
            <View style={style.check_row}>
              <View style={style.check_square}>
                <CheckBox
                  checkedIcon="check"
                  checkedColor="#f20530"
                  checked={this.state.isHMOChecked}
                  onPress={() => {
                    if (this.state.isHMOChecked === false) {
                      this.setState({
                        isHMOChecked: !this.state.isHMOChecked,
                        isHospitalChecked: false,
                        isCentreChecked: false,
                        type: 'HMO',
                      });
                    } else {
                      this.setState({
                        isHMOChecked: !this.state.isHMOChecked,
                        type: '',
                      });
                    }
                  }}
                />
              </View>
              <Text style={style.checkText}>HMO</Text>
            </View>
            <View style={style.check_row}>
              <View style={style.check_square}>
                <CheckBox
                  checkedIcon="check"
                  checkedColor="#f20530"
                  checked={this.state.isCentreChecked}
                  onPress={() => {
                    if (this.state.isCentreChecked === false) {
                      this.setState({
                        isCentreChecked: !this.state.isCentreChecked,
                        isHMOChecked: false,
                        isHospitalChecked: false,
                        type: 'Diagnostic Centre',
                      });
                    } else {
                      this.setState({
                        isCentreChecked: !this.state.isCentreChecked,
                        type: '',
                      });
                    }
                  }}
                />
              </View>
              <Text style={style.checkText}>Diagnostic Centre</Text>
            </View>
          </View>
          <View style={style.footerSection}>
            <TouchableOpacity
              style={
                this.state.isHospitalChecked === false &&
                this.state.isHMOChecked === false &&
                this.state.isCentreChecked === false
                  ? style.btn_disabled
                  : style.btn
              }
              disabled={
                this.state.isHospitalChecked === false &&
                this.state.isHMOChecked === false &&
                this.state.isCentreChecked === false
                  ? true
                  : false
              }
              onPress={() => {
                this.props.navigation.navigate('InstitutionReg1', {
                  type: this.state.type,
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
    flex: 2,
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
    marginLeft: 10,
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
    alignItems: 'flex-start',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#f20530',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btn_disabled: {
    alignItems: 'center',
    backgroundColor: '#f20530',
    paddingVertical: 10,
    paddingHorizontal: 20,
    opacity: 0.5,
  },
  proceedBtn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
  },
  footerSection: {
    flex: 2,
    paddingTop: 10,
  },
  footer_text: {
    marginTop: 40,
    marginRight: 10,
    color: '#717171',
  },
});
