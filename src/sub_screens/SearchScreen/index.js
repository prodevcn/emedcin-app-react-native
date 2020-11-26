import React, {Component} from 'react';
import HeaderBar from '../../components/HeaderBar';
import GLOBALS from '../../constants/Globals';
import {Picker} from 'native-base';
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  // Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
// import requestCameraAndAudioPermission from '../../service/permission';
import {connect} from 'react-redux';
class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Search',
      searchLetter: '',
      searchResult: false,
      doctors: [],
    };
    this.getDoctorList();
  }
  getDoctorList = () => {
    let url = GLOBALS.BASE_URL + 'user/get-doctorlist';
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({doctors: responseJson});
        (async () => {
          try {
            await AsyncStorage.setItem('doctors', JSON.stringify(responseJson));
          } catch (e) {
            console.log(e);
          }
        })();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  componentDidMount() {}
  onValueChange(value) {
    this.setState({
      filter: value,
    });
  }
  doVideoCalling(value) {
    this.props.navigation.navigate('VideoCall', {info: value});
  }
  render() {
    return (
      <SafeAreaView style={styles.main}>
        <HeaderBar
          title={this.state.title}
          navigation={this.props.navigation}
        />
        <View style={styles.filter}>
          <View style={styles.formItem}>
            <Picker
              note
              mode="dropdown"
              selectedValue={this.state.filter}
              onValueChange={this.onValueChange.bind(this)}>
              <Picker.Item label="All" value="All" />
              <Picker.Item label="Connected" value="connected" />
              <Picker.Item label="Disconnected" value="disconnected" />
            </Picker>
          </View>
        </View>
        <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
          {this.props.doctors.map((item, index) => {
            return (
              <View style={styles.context} key={index}>
                <View style={styles.description}>
                  <Image
                    source={GLOBALS.DEFAULT_DOCTOR_AVATAR}
                    style={styles.avatar}
                  />
                  <View style={styles.content}>
                    <Text style={styles.name}>
                      Dr. {item.firstname} {item.lastname}
                    </Text>
                    <Text style={styles.occupation}>{item.type}</Text>
                    <View style={styles.ranking}>
                      <Icon name="star" color="#777" size={16} />
                      {item.ranking > 1 ? (
                        <Icon name="star" color="#777" size={16} />
                      ) : (
                        <Icon name="star-o" color="#777" size={16} />
                      )}
                      {item.ranking > 2 ? (
                        <Icon name="star" color="#777" size={16} />
                      ) : (
                        <Icon name="star-o" color="#777" size={16} />
                      )}
                      {item.ranking > 3 ? (
                        <Icon name="star" color="#777" size={16} />
                      ) : (
                        <Icon name="star-o" color="#777" size={16} />
                      )}
                      {item.ranking > 4 ? (
                        <Icon name="star" color="#777" size={16} />
                      ) : (
                        <Icon name="star-o" color="#777" size={16} />
                      )}
                    </View>
                  </View>
                </View>
                <View style={styles.behavior}>
                  <TouchableOpacity style={styles.behaviorBtn}>
                    <Icon name="phone" size={20} color="#777" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.behaviorBtn}
                    onPress={() => {
                      this.doVideoCalling(item);
                    }}>
                    <Icon name="video-camera" size={20} color="#777" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.behaviorBtn}>
                    <Icon name="wechat" size={20} color="#777" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (store) => {
  const {doctors} = store.common;
  const {patients} = store.common;
  return {doctors, patients};
};
export default connect(mapStateToProps)(SearchScreen);
const styles = StyleSheet.create({
  main: {
    width: '100%',
  },
  context: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingHorizontal: '5%',
    paddingVertical: 10,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  content: {},
  name: {
    fontSize: 18,
    color: GLOBALS.SUB_COLOR,
    marginBottom: 5,
  },
  occupation: {
    color: GLOBALS.BASE_COLOR,
    marginBottom: 3,
  },
  ranking: {
    flexDirection: 'row',
  },
  behavior: {
    flexDirection: 'row',
  },
  behaviorBtn: {
    paddingLeft: 10,
  },
  description: {
    flexDirection: 'row',
  },
  filter: {
    backgroundColor: GLOBALS.BASE_COLOR,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  formItem: {
    width: '50%',
    // borderColor: 'white',
    // height: 20,
    // borderWidth: 1,
  },
});
