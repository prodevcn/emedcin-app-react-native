import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import {ConnectedInstitutionList} from '../../../libs/Connected';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Connected extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <View style={style.main}>
        <View style={style.container}>
          <FlatList
            data={ConnectedInstitutionList}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={style.context}>
                  <View style={style.detail}>
                    <Text style={style.institution}>{item.institution}</Text>
                    <Text style={style.type}>{item.type}</Text>
                  </View>
                  <Icon name="md-arrow-forward" size={20} color="#f20530" />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
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
    fontSize: 16,
  },
  type: {
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
});
