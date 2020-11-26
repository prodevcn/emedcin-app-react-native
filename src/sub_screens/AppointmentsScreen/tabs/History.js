import React, {Component} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import {ActivityList} from '../../../libs/Activities';
// import SelectMultiple from 'react-native-select-multiple';
import Icon from 'react-native-vector-icons/Ionicons';
import GLOBALS from '../../../constants/Globals';
// const items = ['Apples', 'Oranges', 'Pears'];
export default class History extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isScrolling: false,
    selectedFruits: [],
  };
  handleConfirm(pItems) {
    console.log('pItems =>', pItems);
  }
  onSelectionsChange = (selectedFruits) => {
    this.setState({selectedFruits});
  };

  render() {
    return (
      <View style={style.main}>
        <View style={style.container}>
          <FlatList
            style={style.list}
            data={ActivityList}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={style.context}>
                  <View style={style.title}>
                    <Text style={style.object}>{item.object}</Text>
                    <Text style={style.action}>{item.action}</Text>
                  </View>
                  <Text style={style.date}>{item.date}</Text>
                  <Text style={style.description}>{item.description}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
            onScrollEndDrag={() => this.setState({isScrolling: true})}
            onScrollBeginDrag={() => console.log('start')}
            showsVerticalScrollIndicator={false}
          />
          <TouchableOpacity style={style.addBtn}>
            <Icon name="md-calendar" size={24} color={'white'} />
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
    marginBottom: 20,
    width: '100%',
  },
  object: {
    color: '#f20530',
    fontSize: 16,
    marginRight: 10,
  },
  action: {
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
  title: {
    flexDirection: 'row',
  },
  addBtn: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: 10,
    right: 0,
    backgroundColor: GLOBALS.SUB_COLOR,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
