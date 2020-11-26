import React, {Component} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import {CreatedInstitutionList} from '../../../libs/Created';
import MenuIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import GLOBALS from '../../../constants/Globals';

export default class Connected extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={style.main}>
        <View style={style.container}>
          <FlatList
            style={style.list}
            data={CreatedInstitutionList}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={style.context}>
                  <View style={style.detail}>
                    <View style={style.institutionSection}>
                      <Text style={style.institution}>{item.institution}</Text>
                      <Text style={style.status}>{item.status}</Text>
                    </View>
                    <Text style={style.type}>{item.type}</Text>
                  </View>
                  <Icon name="md-arrow-forward" size={20} color="#f20530" />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
          <TouchableOpacity
            style={style.createBtn}
            onPress={() => {
              this.props.navigation.navigate('InstitutionType');
            }}>
            <MenuIcon name="hospital-o" size={25} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
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
  institution: {
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
  institutionSection: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  status: {
    marginLeft: 10,
    fontSize: 8,
  },
  createBtn: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    backgroundColor: GLOBALS.SUB_COLOR,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});
