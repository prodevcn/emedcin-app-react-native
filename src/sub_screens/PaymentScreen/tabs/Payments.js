import React, {Component} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import {PaymentList} from '../../../libs/Payments';
// import SelectMultiple from 'react-native-select-multiple';
// import Icon from 'react-native-vector-icons/Ionicons';
import GLOBALS from '../../../constants/Globals';
export default class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolling: false,
      selectedFruits: [],
    };
  }
  handleConfirm(pItems) {
    console.log('pItems =>', pItems);
  }
  onSelectionsChange = (selectedFruits) => {
    this.setState({selectedFruits});
  };
  componentDidMount() {
    console.log(PaymentList[0]);
  }
  render() {
    return (
      <View style={style.main}>
        <View style={style.container}>
          <FlatList
            style={style.list}
            data={PaymentList}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={style.context}>
                  <View style={style.title}>
                    <Text style={style.object}>
                      {item.symbol}
                      {item.amount}
                    </Text>
                  </View>
                  <Text style={style.date}>{item.title}</Text>
                  <Text style={style.description}>{item.date}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.transactionId}
            onScrollEndDrag={() => this.setState({isScrolling: true})}
            onScrollBeginDrag={() => console.log('start')}
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
