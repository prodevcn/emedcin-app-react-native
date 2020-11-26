import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import {NewsfeedList} from '../../../libs/Newsfeeds';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import GLOBAL from '../../../constants/Globals';
class Newsfeed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={style.main}>
        <View style={style.container}>
          {this.props.news.length === 0 ? (
            <View style={style.emptyArea}>
              <Icon name="newspaper-o" size={80} color={GLOBAL.BASE_COLOR} />
              <Text style={{color: GLOBAL.BASE_COLOR}}>There is no news.</Text>
            </View>
          ) : (
            <FlatList
              data={NewsfeedList}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={style.context}>
                    <Text style={style.description}>{item.description}</Text>
                    <View style={style.detail}>
                      <View style={style.sign}>
                        <Text style={style.by}>by</Text>
                        <Text style={style.author}>{item.author}</Text>
                      </View>
                      <Text style={style.date}>{item.date}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.author}
            />
          )}
        </View>
      </View>
    );
  }
}
const mapStateToProps = (store) => {
  const {news} = store.common;
  return {news};
};
export default connect(mapStateToProps)(Newsfeed);
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
  sign: {
    flexDirection: 'row',
  },
  description: {
    marginTop: 10,
    color: '#717171',
    fontSize: 12,
  },
  by: {
    color: '#717171',
    fontSize: 12,
    marginRight: 10,
  },
  detail: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emptyArea: {
    flex: 1,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
