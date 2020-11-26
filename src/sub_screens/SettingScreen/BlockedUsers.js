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
let list = [
  {name: 'Dr. Andjay', job: 'Doctor-Specialist'},
  {name: 'Mr. Gabriel', job: 'Engineer'},
  {name: 'Dr. Andjay', job: 'Doctor-Specialist'},
];
export default class BlockedUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: this.props.route.params.userInfo,
      title: 'Settings',
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
          {list.map((item, index) => {
            return (
              <List padder key={index}>
                <ListItem noIndent noBorder>
                  <Body>
                    <Text style={styles.color}>{item.name}</Text>
                    <Text note>{item.job}</Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Icon name="warning" style={styles.color} />
                    </Button>
                  </Right>
                </ListItem>
              </List>
            );
          })}
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
