import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class BookHomeAppointmentPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.route.params.type,
    };
  }
  componentDidMount() {
    console.log(this.state.type);
  }
  render() {
    return (
      <SafeAreaView style={style.main}>
        <View style={style.container}>
          <View style={style.titleSection}>
            <View style={style.second}>
              <Text style={style.title}>Book </Text>
              <Text style={style.title_redColor}>{this.state.type}</Text>
            </View>
            <Text style={style.title}>Appointment </Text>
            <View style={style.pagerBar}>
              <View style={style.pager} />
              <View style={style.pager_disabled} />
            </View>
          </View>
          <View style={style.formSection}>
            <View style={style.searchArea}>
              <TextInput
                style={style.formItem}
                placeholder="search for a doctor"
              />
              <Icon name="md-search" size={28} color={'#999'} />
            </View>
          </View>
          <View style={style.footerSection}>
            <TouchableOpacity
              style={style.btn}
              onPress={() => {
                this.props.navigation.navigate('BookHomeAppointmentPage2');
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
