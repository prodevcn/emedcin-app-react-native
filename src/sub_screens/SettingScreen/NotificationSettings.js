import React, {Component} from 'react';
import {Container, Content, ListItem, CheckBox, Text, Body} from 'native-base';
import HeaderBar from '../../components/HeaderBar';
import GLOBALS from '../../constants/Globals';
import {StyleSheet} from 'react-native';
export default class NotificationSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Settings',
      userInfo: this.props.route.params.userInfo,
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,
      flag5: false,
      flag6: false,
      flag7: false,
      flag8: false,
      flag9: false,
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
          <Text style={styles.red} padder>
            Notify me when
          </Text>
          <ListItem noBorder noIndent>
            <Body>
              <Text note>Someone requests to connect with me</Text>
            </Body>
            <CheckBox
              checked={this.state.flag1}
              color={GLOBALS.SUB_COLOR}
              onPress={() => {
                this.setState({flag1: !this.state.flag1});
              }}
            />
          </ListItem>
          <ListItem noBorder noIndent>
            <Body>
              <Text note>My connection request is accepted</Text>
            </Body>
            <CheckBox
              checked={this.state.flag2}
              color={GLOBALS.SUB_COLOR}
              onPress={() => {
                this.setState({flag2: !this.state.flag2});
              }}
            />
          </ListItem>
          <ListItem noBorder noIndent>
            <Body>
              <Text note>An appointment is booked with me</Text>
            </Body>
            <CheckBox
              checked={this.state.flag3}
              color={GLOBALS.SUB_COLOR}
              onPress={() => {
                this.setState({flag3: !this.state.flag3});
              }}
            />
          </ListItem>
          <ListItem noBorder noIndent>
            <Body>
              <Text note>
                My appointment request is accepted/rejected/rescheduled
              </Text>
            </Body>
            <CheckBox
              checked={this.state.flag4}
              color={GLOBALS.SUB_COLOR}
              onPress={() => {
                this.setState({flag4: !this.state.flag4});
              }}
            />
          </ListItem>
          <ListItem noBorder noIndent>
            <Body>
              <Text note>Payment is made for an appointment</Text>
            </Body>
            <CheckBox
              checked={this.state.flag5}
              color={GLOBALS.SUB_COLOR}
              onPress={() => {
                this.setState({flag5: !this.state.flag5});
              }}
            />
          </ListItem>
          <ListItem noBorder noIndent>
            <Body>
              <Text note>Someone comments on my past</Text>
            </Body>
            <CheckBox
              checked={this.state.flag6}
              color={GLOBALS.SUB_COLOR}
              onPress={() => {
                this.setState({flag6: !this.state.flag6});
              }}
            />
          </ListItem>
          <ListItem noBorder noIndent>
            <Body>
              <Text note>Someone likes my post</Text>
            </Body>
            <CheckBox
              checked={this.state.flag7}
              color={GLOBALS.SUB_COLOR}
              onPress={() => {
                this.setState({flag7: !this.state.flag7});
              }}
            />
          </ListItem>
          <ListItem noBorder noIndent>
            <Body>
              <Text note>Someone replies my comment</Text>
            </Body>
            <CheckBox
              checked={this.state.flag8}
              color={GLOBALS.SUB_COLOR}
              onPress={() => {
                this.setState({flag8: !this.state.flag8});
              }}
            />
          </ListItem>
          <ListItem noBorder noIndent>
            <Body>
              <Text note>There is a new post on the new feed</Text>
            </Body>
            <CheckBox
              checked={this.state.flag9}
              color={GLOBALS.SUB_COLOR}
              onPress={() => {
                this.setState({flag9: !this.state.flag9});
              }}
            />
          </ListItem>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  red: {
    color: GLOBALS.SUB_COLOR,
  },
});
