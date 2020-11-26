import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class NotificationDetail extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    author: this.props.appointment.author,
    type: this.props.appointment.type,
    date: this.props.appointment.date,
    description: this.props.appointment.description,
  };
  render() {
    return (
      <TouchableOpacity style={style.container}>
        <Text style={style.author}>{this.state.author}</Text>
        <Text style={style.type}>{this.state.type}</Text>
        <Text style={style.date}>{this.state.date}</Text>
        <Text style={style.description}>{this.state.description}</Text>
      </TouchableOpacity>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    width: '100%',
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
});
