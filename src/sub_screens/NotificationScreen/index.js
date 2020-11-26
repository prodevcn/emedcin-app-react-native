import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import {AppointmentList} from '../../libs/Appointments';
import NotificationDetail from './NotificationDetail';
export default class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Notifications',
      searchLetter: '',
    };
  }
  state = {
    title: '',
  };
  render() {
    return (
      <SafeAreaView style={style.main}>
        <HeaderBar
          title={this.state.title}
          navigation={this.props.navigation}
        />
        <View style={style.colorBar} />
        <View style={style.container}>
          <FlatList
            style={style.list}
            data={AppointmentList}
            renderItem={({item}) => <NotificationDetail appointment={item} />}
            keyExtractor={(item) => item.author}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  colorBar: {
    height: 52,
    backgroundColor: '#024059',
    width: '100%',
  },
  container: {
    width: '80%',
  },
  searchArea: {
    width: '100%',
    flex: 5,
    alignItems: 'center',
  },
  description: {
    color: 'white',
    flex: 1,
  },
  searchGroup: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    fontFamily: 'CenturyGothic',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    fontFamily: 'CenturyGothic',
    paddingLeft: 10,
    color: 'white',
  },
  btn: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f20530',
    width: '40%',
    alignItems: 'center',
  },
  searchBtn: {
    color: 'white',
    fontSize: 16,
  },
  contentArea: {
    flex: 6,
  },
  text: {
    color: '#f20530',
  },
});
