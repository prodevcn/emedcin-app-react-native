import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body,
} from 'native-base';
export default class Charges extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem>
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
            <CheckBox checked={true} />
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green" />
            <Body>
              <Text>Finish list Screen</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
