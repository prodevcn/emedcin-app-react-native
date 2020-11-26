import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  Alert,
  Platform,
} from 'react-native';
// import react
import {firebase} from '@react-native-firebase/storage';
import {updateAvatar} from '../../actions/update';
import ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-simple-toast';
import GLOBALS from '../../constants/Globals';
import {connect} from 'react-redux';
const win = Dimensions.get('window');
const options = {
  title: 'select Avatar',
  quality: 1.0,
  maxWidth: win.width * 0.6,
  maxHeight: win.width * 0.6,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
class EditProfileFirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: this.props.userInfo,
      firstname: this.props.userInfo.firstname,
      lastname: this.props.userInfo.lastname,
      email: this.props.userInfo.email,
      name: this.props.userInfo.name,
      image: this.props.userInfo.avatar,
      imageURL: this.props.userInfo.imageURL,
      uploading: null,
      transferred: null,
      isSelect: false,
    };
  }
  componentDidMount() {}
  uploadImage = async () => {
    const {uri} = this.state.image;
    const fileName = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    this.setState({uploading: true});
    this.setState({transferred: 0});
    const task = firebase.storage().ref(fileName).putFile(uploadUri);
    task.on('state_changed', (snapshot) => {
      this.setState({
        transferred:
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100,
      });
    });
    try {
      await task;
      const url = await firebase.storage().ref(fileName).getDownloadURL();
      this.setState({imageURL: url});
    } catch (e) {
      console.error(e);
    }
    this.setState({uploading: false});
  };
  onSelectAvatar() {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.group('User tapped custom button', response.customButton);
      } else {
        const source = {uri: response.uri};
        this.setState({image: source, isSelect: true});
      }
    });
  }
  pickSingle(cropit, circular = true, mediaType) {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      cropperCircleOverlay: true,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
    })
      .then((image) => {
        console.log('received image', image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }
  async next() {
    if (this.state.isSelect) {
      await this.uploadImage();
    }
    let newUserInfo = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      name: this.state.name,
      _id: this.state.userInfo._id,
      role: this.state.userInfo.role,
      imageURL: this.state.imageURL,
    };
    this.props
      .updateAvatar(newUserInfo)
      .then((data) => {
        // console.log('data', data);
        this.props.navigation.navigate('EditProfileSecondPage');
      })
      .catch((err) => {
        console.error(err);
      });
    // console.log(this.state.image);
    // let url = GLOBALS.BASE_URL + 'user/upload-avatar';
    // let data = new FormData();
    // data.append('image', {
    //   uri: this.state.image.uri,
    //   type: this.state.image.type,
    //   name: this.state.image.filename,
    // });
    // data.append('_id', this.state.userInfo._id);
    // const config = {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   body: data,
    // };
    // console.log(data);
    // fetch(url, config)
    //   .then((response) => {
    //     console.log(response);
    //     this.props.navigation.navigate('EditProfileSecondPage', {
    //       userInfo: this.state.userInfo,
    //       newUserInfo: newUserInfo,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  render() {
    return (
      <SafeAreaView style={style.main}>
        <View style={style.container}>
          <View style={style.titleSection}>
            <View style={style.second}>
              <Text style={style.title}>Edit</Text>
              <Text style={style.title_redColor}>Profile</Text>
            </View>
            {this.state.userInfo.role === 'patient' ? (
              <View style={style.pagerBar}>
                <View style={style.pager} />
                <View style={style.pager_disabled} />
              </View>
            ) : (
              <View style={style.pagerBar}>
                <View style={style.pager} />
                <View style={style.pager_disabled} />
                <View style={style.pager_disabled} />
              </View>
            )}
            <View style={style.avatar_area}>
              {this.props.userInfo.imageURL === '' ? (
                <Image style={style.photo} source={this.state.image} />
              ) : (
                <Image
                  style={style.photo}
                  source={{uri: this.props.userInfo.imageURL}}
                />
              )}
              <TouchableOpacity
                onPress={() => {
                  this.onSelectAvatar();
                }}>
                <Text style={style.changeText}>Change Picture</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.formSection}>
            <TextInput
              style={style.formItem}
              placeholder="first name"
              onChangeText={(input) => {
                this.setState({firstname: input});
              }}
              value={this.state.firstname}
            />
            <TextInput
              style={style.formItem}
              placeholder="last name"
              onChangeText={(input) => {
                this.setState({lastname: input});
              }}
              value={this.state.lastname}
            />
            <TextInput
              style={style.formItem}
              placeholder="email address"
              onChangeText={(input) => {
                this.setState({email: input});
              }}
              value={this.state.email}
            />
            <TextInput
              style={style.formItem}
              placeholder="username"
              onChangeText={(input) => {
                this.setState({name: input});
              }}
              value={this.state.name}
            />
            <View style={style.btnGroup}>
              <TouchableOpacity
                style={style.btn_1}
                onPress={() => {
                  this.next();
                }}>
                <Text style={style.nextBtn}>next</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.btn}
                onPress={() => {
                  Toast.show('User information saved !', Toast.LONG, Toast.TOP);
                }}>
                <Text style={style.confirmBtn}>save</Text>
              </TouchableOpacity>
            </View>
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
export default connect(mapStateToProps, {updateAvatar})(EditProfileFirstPage);
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
    flex: 2,
    width: '100%',
    // backgroundColor: 'yellow',
  },
  second: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 28,
    color: GLOBALS.BASE_COLOR,
    marginRight: 10,
  },
  title_redColor: {
    fontSize: 28,
    color: GLOBALS.SUB_COLOR,
  },
  description: {
    marginTop: 20,
    color: '#717171',
  },
  avatar_area: {
    alignItems: 'center',
  },
  photo: {
    width: win.width * 0.2,
    height: win.width * 0.2,
    marginVertical: 10,
    borderRadius: 100,
  },
  changeText: {
    color: GLOBALS.SUB_COLOR,
  },
  formSection: {
    flex: 3,
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
    borderBottomColor: GLOBALS.SUB_COLOR,
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
    backgroundColor: GLOBALS.SUB_COLOR,
  },
  btn_1: {
    marginTop: 0,
    // width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: GLOBALS.BASE_COLOR,
    width: '40%',
    backgroundColor: 'transparent',
  },
  btnGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  nextBtn: {
    textAlign: 'center',
    color: GLOBALS.BASE_COLOR,
    fontSize: 24,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
