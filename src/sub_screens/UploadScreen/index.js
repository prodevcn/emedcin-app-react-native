import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderBar from '../../components/HeaderBar';
import {DocumentList} from '../../libs/Documents';
import AwesomeAlert from 'react-native-awesome-alerts';
import GLOBALS from '../../constants/Globals';

const win = Dimensions.get('window');
export default class UploadScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Documents / Uploads',
      documents: DocumentList,
      showAlert: false,
      document: '',
    };
  }
  componentDidMount() {
    console.log(this.state.documents);
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
          {this.state.documents.map((item, index) => {
            return (
              <View style={styles.context} key={item.id}>
                <TouchableOpacity>
                  <View style={styles.detail}>
                    <Text style={styles.author}>{item.title}</Text>
                    <Text style={styles.role}>{item.item}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({showAlert: true, document: item});
                  }}>
                  <Icon name="ios-remove-circle" size={20} color="#f20530" />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('UploadForm');
          }}>
          <Icon name="md-cloud-upload" size={23} color="white" />
        </TouchableOpacity>
        <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          message={'Delete ' + this.state.document.title}
          color="red"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Cancel"
          confirmText="Delete"
          cancelButtonColor={GLOBALS.BASE_COLOR}
          confirmButtonColor={GLOBALS.SUB_COLOR}
          onCancelPressed={() => {
            this.setState({showAlert: false});
          }}
          onConfirmPressed={() => {
            var array = [...this.state.documents];
            var index = array.indexOf(this.state.document);
            array.splice(index, 1);
            this.setState({documents: array, showAlert: false});
          }}
        />
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
    width: '80%',
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
  context: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  author: {
    color: '#f20530',
    fontSize: 16,
  },
  icon: {
    backgroundColor: 'red',
  },
  role: {
    color: '#717171',
    fontSize: 16,
  },
  detail: {},
});
