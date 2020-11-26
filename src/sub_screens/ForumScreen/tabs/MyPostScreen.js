import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GLOBALS from '../../../constants/Globals';

export default class MyPostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: '#bbb',
      color2: '#bbb',
      color3: '#bbb',
    };
  }

  setColor(value) {
    if (value === 1) {
      if (this.state.color1 === GLOBALS.SUB_COLOR) {
        this.setState({color1: '#bbb'});
      } else {
        this.setState({color1: GLOBALS.SUB_COLOR});
      }
    } else if (value === 2) {
      if (this.state.color2 === GLOBALS.SUB_COLOR) {
        this.setState({color2: '#bbb'});
      } else {
        this.setState({color2: GLOBALS.SUB_COLOR});
      }
    } else if (value === 3) {
      if (this.state.color3 === GLOBALS.SUB_COLOR) {
        this.setState({color3: '#bbb'});
      } else {
        this.setState({color3: GLOBALS.SUB_COLOR});
      }
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <ScrollView style={styles.list}>
          <View style={styles.content}>
            <View style={styles.container}>
              <Text style={styles.description}>
                This is a place holder for users posts in the health forum users
                view
              </Text>
              <View style={styles.info}>
                <View style={styles.author_section}>
                  <Text style={styles.default}>by </Text>
                  <Text style={styles.red}>Dr Olatunji</Text>
                </View>
                <Text style={styles.default}>1 min ago</Text>
              </View>
              <View style={styles.subscribe}>
                <Text style={styles.default}>28 comments</Text>
                <View style={styles.icons}>
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => {
                      this.setColor(1);
                    }}>
                    <Icon name="pencil" size={16} color={this.state.color1} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => {
                      this.setColor(2);
                    }}>
                    <Icon name="comment" size={16} color={this.state.color2} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => {
                      this.setColor(3);
                    }}>
                    <Icon name="heart" size={16} color={this.state.color3} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.addBtn}>
          <Icon name="pencil" color="white" size={24} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
  container: {
    width: '80%',
  },
  content: {
    marginTop: 20,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    width: '100%',
    alignItems: 'center',
  },
  description: {
    marginBottom: 10,
    color: '#999',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  default: {
    color: '#999',
  },
  red: {
    color: GLOBALS.SUB_COLOR,
  },
  author_section: {
    flexDirection: 'row',
  },
  subscribe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  icons: {
    flexDirection: 'row',
  },
  item: {
    marginLeft: 10,
  },
  addBtn: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: GLOBALS.SUB_COLOR,
    bottom: 30,
    right: '10%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
