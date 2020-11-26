import React, {Component} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import GLOBAL from '../../../constants/Globals';
import {getConnections} from '../../../actions/common';
// import object from 'react-native-ui-lib/generatedTypes/style/colorName';
class Connections extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      console.log('------------------------>Focus');
      this.props.getConnections(this.props.userInfo);
    });
  }
  render() {
    const objects = this.props.patients
      .concat(this.props.doctors)
      .concat(this.props.institutions);
    const connected_Id = this.props.connect_patient_id
      .concat(this.props.connect_doctor_id)
      .concat(this.props.connect_institution_id);
    const connections = [];
    objects.map((item, index) => {
      for (let i = 0; i < connected_Id.length; i++) {
        if (item._id === connected_Id[i]) {
          connections.push(item);
        }
      }
    });
    console.log(connections);
    return (
      <View style={style.main}>
        <View style={style.container}>
          {connections.length === 0 ? (
            <View style={style.emptyArea}>
              <Icon1 name="users" size={80} color={GLOBAL.BASE_COLOR} />
              <Text style={{color: GLOBAL.BASE_COLOR}}>
                There is no connection.
              </Text>
            </View>
          ) : (
            <FlatList
              style={style.list}
              data={connections}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={style.context}>
                    <View style={style.detail}>
                      <Text style={style.author}>
                        {item.mdcn ? 'Dr. ' : ''}
                        {item.firstname} {item.lastname}
                      </Text>
                      <Text style={style.role}>
                        {item.mdcn
                          ? 'Doctor - ' + item.type
                          : item.website
                          ? item.type
                          : 'Patient'}
                      </Text>
                    </View>
                    <Icon name="md-arrow-forward" size={20} color="#f20530" />
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item._id}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    );
  }
}
const mapStateToProps = (store) => {
  const {
    userInfo,
    patients,
    doctors,
    institutions,
    connect_patient_id,
    connect_doctor_id,
    connect_institution_id,
  } = store.common;
  return {
    userInfo,
    patients,
    doctors,
    institutions,
    connect_patient_id,
    connect_doctor_id,
    connect_institution_id,
  };
};
export default connect(mapStateToProps, {getConnections})(Connections);
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
    flex: 1,
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
  role: {
    color: '#717171',
    fontSize: 16,
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
