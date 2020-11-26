import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
const win = Dimensions.get('window');
class ProfileArea extends Component {
  constructor(props) {
    super(props);
    this.getData();
    this.state = {
      userInfo: {},
    };
  }
  getData = async () => {
    try {
      let value = await AsyncStorage.getItem('userInfo');
      value = JSON.parse(value);
      this.setState({userInfo: value});
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount() {}
  render() {
    // const path = '../../assets/images/avatar/default_doctor_avatar.png';
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <View style={styles.photo_area}>
            {this.props.userInfo.imageURL === '' ? (
              <Image source={this.props.userInfo.avatar} style={styles.photo} />
            ) : (
              <Image
                source={{uri: this.props.userInfo.imageURL}}
                style={styles.photo}
              />
            )}
          </View>
          <View style={styles.title_area}>
            <Text style={styles.name}>
              {this.props.userInfo.firstname} {''}
              {this.props.userInfo.lastname}
            </Text>
            <Text style={styles.role}>{this.props.userInfo.role}</Text>
          </View>
          <View style={styles.entry}>
            <Image
              style={styles.flag}
              source={{
                uri:
                  'https://github.com/hjnilsson/country-flags/blob/master/png1000px/ng.png?raw=true',
              }}
            />
            <Text style={styles.country}>
              {this.props.userInfo.nationality}
            </Text>
            <Text style={styles.gender}>{this.props.userInfo.gender}</Text>
            <Text style={styles.age}>{this.props.userInfo.age}</Text>
            <Text style={styles.age_suffix}>years old</Text>
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

export default connect(mapStateToProps)(ProfileArea);

const styles = StyleSheet.create({
  main: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#024059',
  },
  container: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  photo_area: {
    width: '100%',
  },
  photo: {
    height: win.width * 0.2,
    width: win.width * 0.2,
    borderRadius: 100,
  },
  title_area: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    width: '100%',
    marginVertical: 10,
  },
  name: {
    fontSize: 18,
    color: 'white',
  },
  role: {
    marginLeft: 10,
    fontSize: 16,
    color: '#f20530',
  },
  entry: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
    justifyContent: 'space-between',
  },
  flag: {
    width: win.width * 0.1,
    height: win.width * 0.06,
  },
  country: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 5,
  },
  gender: {
    color: 'white',
    fontSize: 16,
  },
  age: {
    color: 'white',
    fontSize: 16,
  },
  age_suffix: {
    color: 'white',
    fontSize: 16,
  },
});
