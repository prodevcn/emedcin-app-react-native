import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  // Image,
  Dimensions,
} from 'react-native';

import Textarea from 'react-native-textarea';
import GLOBALS from '../../../constants/Globals';
import ImagePicker from 'react-native-image-crop-picker';

const win = Dimensions.get('window');
export default class InstitutionRegisterSecondScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      institution: this.props.route.params.institution,
      area: 'Dermatology',
      about: 'Area 1 ',
      image: {},
    };
  }

  handleChoosePhoto(cropit, circular = true, mediaType) {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      cropperCircleOverlay: false,
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
        });
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }
  next() {
    let institution = this.state.institution;
    institution.area = this.state.area;
    institution.about = this.state.about;
    this.props.navigation.navigate('InstitutionReg3', {
      institution: institution,
      image: this.state.image,
    });
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
              <View style={style.pager_disabled} />
            </View>
          </View>
          <View style={style.formSection}>
            <TextInput
              style={style.formItem}
              placeholder="area of specialization"
              value={this.state.area}
              onChangeText={(input) => {
                this.setState({area: input});
              }}
            />
            <Textarea
              containerStyle={style.textareaContainer}
              style={style.textarea}
              onChangeText={(input) => {
                this.setState({about: input});
              }}
              defaultValue={this.state.about}
              placeholder={'about institution'}
              placeholderTextColor={'#aaa'}
              underlineColorAndroid={'transparent'}
            />
            <View style={style.uploadArea}>
              <Text style={style.uploadTitle}>upload picture/logo</Text>
              <TouchableOpacity
                style={style.plusBtn}
                onPress={() => {
                  this.handleChoosePhoto(false, true);
                }}>
                <Text style={style.btnText}>+</Text>
              </TouchableOpacity>
            </View>
            {/*<Image style={style.photo} source={this.state.image} /> */}
            <Text>{this.state.image.uri}</Text>
            <TouchableOpacity
              style={
                this.state.area !== '' &&
                this.state.about !== '' &&
                this.state.image.uri !== {}
                  ? style.btn
                  : style.btn_disabled
              }
              disabled={
                this.state.area !== '' &&
                this.state.about !== '' &&
                this.state.image.uri !== {}
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
    opacity: 0.5,
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
  textareaContainer: {
    borderColor: '#717171',
    borderWidth: 1,
    height: '20%',
    marginTop: 20,
    marginBottom: 20,
  },
  check_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkText: {
    color: '#717171',
  },
  check_area: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  photo: {
    width: win.width * 0.6,
    height: win.width * 0.6,
    marginBottom: 10,
  },
});
