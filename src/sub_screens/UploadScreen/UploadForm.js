import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import {Picker} from 'native-base';
import DocumentPicker from 'react-native-document-picker';

const win = Dimensions.get('window');
export default class UploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Documents / Uploads',
      selected: 'key0',
      file: {},
      filename: '',
    };
  }
  doUpload() {
    /* ... */
    this.props.navigation.navigate('Profile');
  }
  onValueChange(value) {
    this.setState({
      selected: value,
    });
    (async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.images],
        });
        console.log(res);
        this.setState({file: this.res, filename: res.name});
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // User cancelled the picker, exit any dialogs or menus and move on
        } else {
          throw err;
        }
      }
    })();
  }
  render() {
    return (
      <SafeAreaView style={styles.main}>
        <HeaderBar
          title={this.state.title}
          navigation={this.props.navigation}
        />
        <View style={styles.blue_bar} />
        <View style={styles.container}>
          <View style={styles.formArea}>
            <View style={styles.picker}>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}>
                <Picker.Item label="please select file type" value="key0" />
                <Picker.Item label="International Passport" value="key1" />
                <Picker.Item label="Medical Certificate" value="key2" />
              </Picker>
            </View>
            <TextInput
              style={styles.formItem}
              placeholder="file name"
              value={this.state.filename}
            />
          </View>
          <View style={styles.btnArea}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                this.doUpload();
              }}>
              <Text style={styles.btnText}>upload</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  blue_bar: {
    width: '100%',
    height: 52,
    backgroundColor: '#024059',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    width: '80%',
  },
  picker: {
    marginVertical: 30,
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderColor: '#717171',
  },
  formItem: {
    borderWidth: 1,
    borderColor: '#717171',
    fontSize: 16,
    fontFamily: 'CenturyGothic',
    paddingLeft: 20,
  },
  formArea: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: win.width * 0.1,
    width: win.width * 0.15,
    height: win.width * 0.15,
    backgroundColor: '#f20530',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnArea: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 40,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f20530',
  },
  btnText: {
    fontSize: 24,
    color: 'white',
  },
});
