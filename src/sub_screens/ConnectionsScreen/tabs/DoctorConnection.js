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
import {connect} from 'react-redux';
import {setConnect} from '../../../actions/common';
class DoctorConnection extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <Container>
        <Content padder>
          <List padder>
            {this.props.disconnected_doctors.map((item, index) => {
              return (
                <ListItem noIndent key={index}>
                  <Body>
                    <Text style={styles.color}>
                      Dr. {item.firstname} {item.lastname}
                    </Text>
                    <Text note>Doctor - {item.type}</Text>
                  </Body>
                  <Right>
                    <Button
                      transparent
                      onPress={() => {
                        this.props.setConnect(
                          this.props.userInfo._id,
                          'doctor',
                          item.id,
                          'doctor',
                        );
                      }}>
                      <Icon name="arrow-forward" style={styles.color} />
                    </Button>
                  </Right>
                </ListItem>
              );
            })}
          </List>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (store) => {
  const {disconnected_doctors, connections, userInfo} = store.common;
  return {disconnected_doctors, connections, userInfo};
};

export default connect(mapStateToProps, {setConnect})(DoctorConnection);
const styles = StyleSheet.create({
  color: {
    color: Globals.SUB_COLOR,
  },
});
