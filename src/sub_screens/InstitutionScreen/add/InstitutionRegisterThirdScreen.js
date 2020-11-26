import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {Picker} from 'native-base';
import GLOBALS from '../../../constants/Globals';
import DocumentPicker from 'react-native-document-picker';
export default class InstitutionRegisterThirdScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      institution: this.props.route.params.institution,
      image: this.props.route.params.image,
      file: {},
      selected: 'key0',
    };
  }
  componentDidMount() {
    console.log(this.state.image);
  }
  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }
  chooseDocument() {
    (async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.pdf],
        });
        this.setState({file: res});
        console.log(res.uri, res.type, res.name, res.size);
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
        } else {
          throw err;
        }
      }
    })();
  }
  render() {
    return (
      <SafeAreaView style={style.main}>
        <View style={style.container}>
          <View style={style.titleSection}>
            <View style={style.titleArea}>
              <Text style={style.title}>Register </Text>
              <View style={style.second}>
                <Text style={style.title_redColor}>Institution</Text>
              </View>
            </View>
            <View style={style.pagerBar}>
              <View style={style.pager} />
              <View style={style.pager} />
              <View style={style.pager} />
            </View>
          </View>
          <View style={style.formSection}>
            <Text style={style.description}>
              To complete registration, please upload valid documentation for
              verification
            </Text>
            <View style={style.picker}>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}>
                <Picker.Item label="please select file type" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </View>
            <View style={style.uploadArea}>
              <Text style={style.uploadTitle}>upload picture/logo</Text>
              <TouchableOpacity
                style={style.plusBtn}
                onPress={() => {
                  this.chooseDocument();
                }}>
                <Text style={style.btnText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text>{this.state.file.uri}</Text>
            <TouchableOpacity
              style={
                this.state.selected !== '' ? style.btn : style.btn_disabled
              }
              disabled={this.state.selected !== '' ? false : true}
              onPress={() => {
                this.props.navigation.navigate('InstitutionSuccess', {
                  institution: this.state.institution,
                  image: this.state.image,
                  file: this.state.file,
                });
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
    alignItems: 'center',
  },
  description: {
    color: '#999',
  },
  picker: {
    marginVertical: 30,
    // backgroundColor: 'red',
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderColor: '#717171',
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
  uploadArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  uploadTitle: {
    color: '#aaa',
  },
  plusBtn: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: GLOBALS.SUB_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 24,
    color: 'white',
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
