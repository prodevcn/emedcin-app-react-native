import React, {Component} from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Right,
  Icon,
  Body,
  Button,
} from 'native-base';

import {StyleSheet} from 'react-native';
import Globals from '../../constants/Globals';
import HeaderBar from '../../components/HeaderBar';
import AsyncStorage from '@react-native-community/async-storage';

export default class IndexScreen extends Component {
  constructor(props) {
    super(props);
    (async () => {
      try {
        const value = await AsyncStorage.getItem('userInfo');
        this.setState({userInfo: JSON.parse(value)});
      } catch (e) {
        console.log(e);
      }
    })();
    this.state = {
      title: 'Settings',
      userInfo: {},
    };
  }
  render() {
    return (
      <Container>
        <HeaderBar
          title={this.state.title}
          navigation={this.props.navigation}
        />
        <Content padder>
          <List padder>
            {this.state.userInfo.role === 'doctor' && (
              <ListItem noIndent>
                <Body>
                  <Text note>Availability</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name="arrow-forward" style={styles.color} />
                  </Button>
                </Right>
              </ListItem>
            )}
            {this.state.userInfo.role === 'doctor' && (
              <ListItem noIndent>
                <Body>
                  <Text note>Charges</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name="arrow-forward" style={styles.color} />
                  </Button>
                </Right>
              </ListItem>
            )}
            <ListItem noIndent>
              <Body>
                <Text note>Change Password</Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() => {
                    this.props.navigation.navigate('ResetPwd', {
                      userInfo: this.state.userInfo,
                    });
                  }}>
                  <Icon name="arrow-forward" style={styles.color} />
                </Button>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Body>
                <Text note>Notification Settings</Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() => {
                    this.props.navigation.navigate('NotificationSettings', {
                      userInfo: this.state.userInfo,
                    });
                  }}>
                  <Icon name="arrow-forward" style={styles.color} />
                </Button>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Body>
                <Text note>Blocked Users</Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() => {
                    this.props.navigation.navigate('BlockedUsers', {
                      userInfo: this.state.userInfo,
                    });
                  }}>
                  <Icon name="arrow-forward" style={styles.color} />
                </Button>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Body>
                <Text note>Delete Account</Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() => {
                    this.props.navigation.navigate('DeleteAccount', {
                      userInfo: this.state.userInfo,
                    });
                  }}>
                  <Icon name="arrow-forward" style={styles.color} />
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  color: {
    color: Globals.SUB_COLOR,
  },
});
