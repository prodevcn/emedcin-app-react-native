import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  // Platform,
} from 'react-native';
import {Picker} from 'native-base';
import ImagePicker from 'react-native-image-picker';
// import GLOBALS from '../../constants/Globals';
// import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const win = Dimensions.get('window');
const options = {
  title: 'select ID',
  quality: 1.0,
  maxWidth: win.width * 0.6,
  maxHeight: win.width * 0.6,
  storageOptions: {
    skipBackup: true,
  },
  takePhotoButtonTitle: 'Take photo with your camera',
  chooseFromLibraryButtonTitle: 'choose photo from library',
};

// const createFormData = (photo, body) => {
//   const data = new FormData();
//   data.append('photo', {
//     name: photo.fileName,
//     type: photo.type,
//     uri:
//       Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
//   });

//   Object.keys(body).forEach((key) => {
//     data.append(key, body[key]);
//   });
//   console.log(data);
//   return data;
// };
export default class IDScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: this.props.userInfo,
      CardName: '',
      photo: null,
    };
  }
  onValueChange(value) {
    this.setState({
      CardName: value,
    });
    this.handleChoosePhoto();
  }
  handleChoosePhoto = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };
  doUpload() {
    // let url = GLOBALS.BASE_URL + 'upload-image';
    // const body = createFormData(this.state.photo, {
    //   _id: this.state.userInfo._id,
    // });
    // const headers = {
    //   'content-type': 'multipart/form-data',
    //   accept: 'application/json',
    // };
    // fetch(url, {
    //   method: 'POST',
    //   headers,
    //   body,
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log('upload success', response);
    //     this.setState({photo: null});
    //   })
    //   .catch((error) => {
    //     console.log('upload error', error);
    //   });
    this.props.navigation.navigate('UploadSuccess');
  }
  render() {
    const {photo} = this.state;
    return (
      <SafeAreaView style={style.main}>
        <View style={style.container}>
          <View style={style.titleSection}>
            <Text style={style.title}>Upload </Text>
            <View style={style.second}>
              <Text style={style.title_redColor}>Identification</Text>
            </View>
            <Text style={style.description}>
              Select the valid means of identification you want to upload, then
              tap "upload"
            </Text>
          </View>
          <View style={style.formSection}>
            <View style={style.select_area}>
              <View style={style.formItem}>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.CardName}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item label="please select valid ID" value="" />
                  <Picker.Item label="ID card" value="IDCard" />
                  <Picker.Item label="Driver's Licence" value="DriverLicence" />
                </Picker>
              </View>
              {photo && (
                <Image source={{uri: photo.uri}} style={style.imgArea} />
              )}
            </View>
            <View style={style.btn_area}>
              <TouchableOpacity
                style={
                  this.state.CardName !== '' ? style.btn : style.btn_disabled
                }
                disabled={this.state.CardName === '' ? true : false}
                onPress={() => {
                  this.doUpload();
                }}>
                <Text style={style.uploadBtn}>upload</Text>
              </TouchableOpacity>
            </View>
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
    flex: 2,
    width: '100%',
    paddingTop: 52,
  },
  second: {
    flexDirection: 'row',
  },
  select_area: {
    width: '100%',
    flex: 4,
    alignItems: 'center',
  },
  btn_area: {
    flex: 2,
  },
  title: {
    fontSize: 28,
    color: '#024059',
  },
  title_redColor: {
    fontSize: 28,
    color: '#f20530',
  },
  imgArea: {
    width: win.width * 0.6,
    height: win.width * 0.6,
  },
  description: {
    marginTop: 20,
    color: '#717171',
  },
  formSection: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
  },
  formItem: {
    width: '100%',
    borderColor: '#717171',
    borderWidth: 1,
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'CenturyGothic',
    paddingLeft: 10,
  },
  forgot: {
    textAlign: 'right',
    marginRight: 20,
    color: '#024059',
  },
  btn: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#f20530',
  },
  btn_disabled: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#f20530',
    opacity: 0.5,
  },
  uploadBtn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  footer: {
    flex: 2,
    backgroundColor: 'aqua',
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
  style1: {
    fontSize: 16,
    color: 'blue',
  },
  txt: {
    fontSize: 20,
  },
});
