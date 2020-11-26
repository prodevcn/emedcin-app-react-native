import React, {Component, createRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import GLOBALS from '../../constants/Globals';

let CurrentSlide = 0;
let IntervalTime = 5000;
const win = Dimensions.get('window');
const description = [
  {
    text: 'Easily Book Home or Video Appointments with Doctors',
  },
  {text: 'Connect with Specialist And Non Specialist Doctors'},
  {text: 'Connect with Specialist And Non Specialist Doctors'},
  {text: 'Find Health Institutions nearest to you'},
];
export default class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          title: 'slide_1',
          image: require('../../../assets/images/onboarding_slide/slide_1.jpg'),
        },
        {
          title: 'slide_2',
          image: require('../../../assets/images/onboarding_slide/slide_2.jpg'),
        },
        {
          title: 'slide_3',
          image: require('../../../assets/images/onboarding_slide/slide_3.jpg'),
        },
        {
          title: 'slide_4',
          image: require('../../../assets/images/onboarding_slide/slide_4.jpg'),
        },
      ],
      description: description[0].text,
    };
    this.flatList = createRef();
  }
  _goToNextPage = () => {
    // console.log(CurrentSlide);
    if (CurrentSlide >= this.state.images.length - 1) {
      CurrentSlide = -1;
    }
    this.flatList.current.scrollToIndex({
      index: CurrentSlide + 1,
      animated: true,
    });
    CurrentSlide = CurrentSlide + 1;
    this.setState({description: description[CurrentSlide].text});
  };
  _startAutoPlay = () => {
    this._timerId = setInterval(this._goToNextPage, IntervalTime);
  };
  _stopAutoPlay = () => {
    if (this._timerId) {
      clearInterval(this._timerId);
      this._timerId = null;
    }
  };
  componentDidMount() {
    this._startAutoPlay();
    this.props.navigation.addListener('didFocus', () => {
      this._stopAutoPlay();
      this._startAutoPlay();
    });
    this.props.navigation.addListener('didBlur', () => {
      this._stopAutoPlay();
    });
  }
  componentWillUnmount() {
    this._stopAutoPlay();
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.images}
          keyExtractor={(item) => item.title}
          renderItem={({item}) => {
            return (
              <View>
                <Image source={item.image} style={styles.sliderItems} />
              </View>
            );
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={this.flatList}
        />
        <View style={styles.title_area}>
          <Text style={styles.description}>{this.state.description}</Text>
        </View>
        <Image
          source={require('../../../assets/images/onboarding_slide/logo.png')}
          style={styles.logo}
        />
        <View style={styles.btn_area}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.text1}>log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerBtn}
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}>
            <Text style={styles.text}>register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    width: '100%',
    height: win.height * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoView: {
    width: '100%',
    alignItems: 'center',
  },
  title_area: {
    position: 'absolute',
    top: win.width * 0.1,
    left: win.width * 0.1,
    width: win.width * 0.7,
  },
  description: {
    color: GLOBALS.BASE_COLOR,
    fontSize: 16,
  },
  logo: {
    position: 'absolute',
    width: win.width * 0.8,
    height: (win.width * 0.8 * 200) / 640,
    top: win.height * 0.25,
  },
  pagerBar: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pager: {
    width: '10%',
    height: '100%',
    margin: '5%',
    borderBottomColor: '#f20530',
    borderBottomWidth: 2,
  },
  pager_disabled: {
    width: '10%',
    height: '100%',
    margin: '5%',
    borderBottomColor: '#717171',
    borderBottomWidth: 2,
  },
  textarea: {
    marginTop: 30,
    alignItems: 'center',
  },
  textrow: {
    flexDirection: 'row',
  },
  origin: {
    fontSize: 12,
    color: '#024059',
  },
  redcolored: {
    fontSize: 12,
    color: '#f20530',
  },
  rec: {
    backgroundColor: 'aqua',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'CenturyGothic',
  },
  text1: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'CenturyGothic',
  },
  slider: {
    flex: 4,
    alignItems: 'center',
    width: '90%',
    marginTop: 52,
  },
  slideImage: {
    width: win.width * 0.7,
    height: win.width * 0.7,
  },
  btn_area: {
    position: 'absolute',
    bottom: win.height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  loginBtn: {
    width: '40%',
    backgroundColor: '#024059',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  registerBtn: {
    backgroundColor: '#f20530',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#f20530',
  },
  slide: {
    backgroundColor: 'purple',
    padding: 50,
  },
  sliderItems: {
    height: (win.width * 3200) / 1440,
    width: win.width,
  },
});
