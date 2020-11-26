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
import Globals from '../../../constants/Globals';
export default class DoctorConnection extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <List padder>
            <ListItem noIndent>
              <Body>
                <Text style={styles.color}>Dr.Anjay</Text>
                <Text note>Doctor - Specialist</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="arrow-forward" style={styles.color} />
                </Button>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Body>
                <Text style={styles.color}>Dr.Anjay</Text>
                <Text note>Doctor - Specialist</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="arrow-forward" style={styles.color} />
                </Button>
              </Right>
            </ListItem>
            <ListItem noIndent>
              <Body>
                <Text style={styles.color}>Dr.Anjay</Text>
                <Text note>Doctor - Specialist</Text>
              </Body>
              <Right>
                <Button transparent>
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
