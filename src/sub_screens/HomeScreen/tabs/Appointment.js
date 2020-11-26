import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import {AppointmentList} from '../../../libs/Appointments';
import GLOBAL from '../../../constants/Globals';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
class Appointment extends Component {
  constructor(props) {
    super(props);
  }
  async getAppointments() {
    const url = GLOBAL.BASE_URL + 'appointment/get_appointment';
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.props.userInfo,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <View style={style.main}>
        <View style={style.container}>
          {this.props.appointments.length === 0 ? (
            <View style={style.emptyArea}>
              <Icon name="handshake-o" size={80} color={GLOBAL.BASE_COLOR} />
              <Text style={{color: GLOBAL.BASE_COLOR}}>
                There is no appointment.
              </Text>
            </View>
          ) : (
            <FlatList
              style={style.list}
              data={AppointmentList}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={style.context}>
                    <Text style={style.author}>{item.author}</Text>
                    <Text style={style.type}>{item.type}</Text>
                    <Text style={style.date}>{item.date}</Text>
                    <Text style={style.description}>{item.description}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.author}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    );
  }
}
const mapStateToProps = (store) => {
  const {appointments} = store.common;
  return {appointments};
};
export default connect(mapStateToProps)(Appointment);
const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '80%',
    marginTop: 30,
  },
  context: {
    marginBottom: 20,
  },
  author: {
    color: '#f20530',
    fontSize: 12,
  },
  type: {
    color: '#717171',
    fontSize: 12,
  },
  date: {
    color: '#717171',
    fontSize: 12,
  },
  description: {
    marginTop: 10,
    color: '#717171',
    fontSize: 12,
  },
  emptyArea: {
    flex: 1,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
