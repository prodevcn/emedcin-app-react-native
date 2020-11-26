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
class PatientConnection extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.disconnected_patients);
  }
  render() {
    return (
      <Container>
        <Content padder>
          <List padder>
            {this.props.disconnected_patients.map((item, index) => {
              return (
                <ListItem noIndent key={index}>
                  <Body>
                    <Text style={styles.color}>
                      {item.gender === 'Male' ? 'Mr. ' : 'Ms. '}
                      {item.firstname} {item.lastname}
                    </Text>
                    <Text note>Patient</Text>
                  </Body>
                  <Right>
                    <Button
                      transparent
                      onPress={() => {
                        this.props.setConnect(
                          this.props.userInfo._id,
                          'patient',
                          item.id,
                          'patient',
                        );
                        // this.props.getCommon();
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
  const {disconnected_patients, connections, userInfo} = store.common;
  return {disconnected_patients, connections, userInfo};
};

export default connect(mapStateToProps, {setConnect})(PatientConnection);
const styles = StyleSheet.create({
  color: {
    color: Globals.SUB_COLOR,
  },
});
