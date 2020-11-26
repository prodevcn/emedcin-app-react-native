import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import GLOBAL from '../../../constants/Globals';
class Activity extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isScrolling: false,
  };

  render() {
    return (
      <View style={style.main}>
        <View style={style.container}>
          {this.props.activities.length === 0 ? (
            <View style={style.emptyArea}>
              <Icon name="tasks" size={80} color={GLOBAL.BASE_COLOR} />
              <Text style={{color: GLOBAL.BASE_COLOR}}>
                There is no activity.
              </Text>
            </View>
          ) : (
            <FlatList
              style={style.list}
              data={this.props.activities}
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
              onScrollEndDrag={() => console.log('end')}
              onScrollBeginDrag={() => console.log('start')}
              showsVerticalScrollIndicator={false}
              onMomentumScrollEnd={(e) => {
                console.log(e.nativeEvent.contentOffset.y);
              }}
            />
          )}
        </View>
      </View>
    );
  }
}
const mapStateToProps = (store) => {
  const {activities} = store.common;
  return {activities};
};
export default connect(mapStateToProps)(Activity);
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
  emptyArea: {
    flex: 1,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
