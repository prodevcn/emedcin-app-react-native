import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  NativeModules,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {RtcEngine, AgoraView} from 'react-native-agora';
import Icon from 'react-native-vector-icons/MaterialIcons';
import requestCameraAndAudioPermission from '../../service/permission';
const {Agora} = NativeModules; //Define Agora object as a native module

const {FPS30, AudioProfileDefault, AudioScenarioDefault, Adaptative} = Agora; //Set defaults for Stream

class VideoCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peerIds: [], //Array for storing connected peers
      uid: Math.floor(Math.random() * 100), //Generate a UID for local user
      appid: 'ec0f03cb32254fb3a2a342c7c42a428e', //Enter the App ID generated from the Agora Website
      channelName: '007', //this.props.route.params.info._id, //Channel Name for the current session
      vidMute: false, //State variable for Video Mute
      audMute: false, //State variable for Audio Mute
      joinSucceed: false, //State variable for storing success
    };
    if (Platform.OS === 'android') {
      requestCameraAndAudioPermission().then((_) => {
        console.log('requested !');
      });
    }
    if (Platform.OS === 'android') {
      const config = {
        //Setting config of the app
        appid: this.state.appid, //App ID
        channelProfile: 0, //Set channel profile as 0 for RTC
        videoEncoderConfig: {
          //Set Video feed encoder settings
          width: 720,
          height: 1080,
          bitrate: 1,
          frameRate: FPS30,
          orientationMode: Adaptative,
        },
        audioProfile: AudioProfileDefault,
        audioScenario: AudioScenarioDefault,
      };
      RtcEngine.init(config); //Initialize the RTC engine
    }
  }
  componentDidMount() {
    RtcEngine.on('userJoined', (data) => {
      const {peerIds} = this.state; //Get current peer IDs
      if (peerIds.indexOf(data.uid) === -1) {
        //If new user has joined
        this.setState({
          peerIds: [...peerIds, data.uid], //add peer ID to state array
        });
      }
    });
    RtcEngine.on('userOffline', (data) => {
      //If user leaves
      this.setState({
        peerIds: this.state.peerIds.filter((uid) => uid !== data.uid), //remove peer ID from state array
      });
    });
    RtcEngine.on('joinChannelSuccess', (data) => {
      //If Local user joins RTC channel
      RtcEngine.startPreview(); //Start RTC preview
      this.setState({
        joinSucceed: true, //Set state variable to true
      });
    });
    RtcEngine.joinChannel(this.state.channelName, this.state.uid); //Join Channel
    RtcEngine.enableAudio(); //Enable the audio
  }
  toggleAudio = () => {
    let mute = this.state.audMute;
    console.log('Audio toggle', mute);
    RtcEngine.muteLocalAudioStream(!mute);
    this.setState({
      audMute: !mute,
    });
  };

  toggleVideo = () => {
    let mute = this.state.vidMute;
    console.log('Video toggle', mute);
    this.setState({
      vidMute: !mute,
    });
    RtcEngine.muteLocalVideoStream(!this.state.vidMute);
  };

  endCall() {
    RtcEngine.destroy();
    this.props.navigation.goBack();
  }
  videoView() {
    return (
      <View style={styles.flex}>
        {this.state.peerIds.length > 3 ? ( //view for four videostreams
          <View style={styles.flex}>
            <View style={styles.halfFlex}>
              <AgoraView
                style={{flex: 1 / 2}}
                remoteUid={this.state.peerIds[0]}
                mode={1}
              />
              <AgoraView
                style={{flex: 1 / 2}}
                remoteUid={this.state.peerIds[1]}
                mode={1}
              />
            </View>
            <View style={styles.halfFlex}>
              <AgoraView
                style={{flex: 1 / 2}}
                remoteUid={this.state.peerIds[2]}
                mode={1}
              />
              <AgoraView
                style={{flex: 1 / 2}}
                remoteUid={this.state.peerIds[3]}
                mode={1}
              />
            </View>
          </View>
        ) : this.state.peerIds.length > 2 ? ( //view for three videostreams
          <View style={styles.flex}>
            <View style={{flex: 1 / 2}}>
              <AgoraView
                style={styles.flex}
                remoteUid={this.state.peerIds[0]}
                mode={1}
              />
            </View>
            <View style={styles.halfFlex}>
              <AgoraView
                style={{flex: 1 / 2}}
                remoteUid={this.state.peerIds[1]}
                mode={1}
              />
              <AgoraView
                style={{flex: 1 / 2}}
                remoteUid={this.state.peerIds[2]}
                mode={1}
              />
            </View>
          </View>
        ) : this.state.peerIds.length > 1 ? ( //view for two videostreams
          <View style={styles.flex}>
            <AgoraView
              style={styles.flex}
              remoteUid={this.state.peerIds[0]}
              mode={1}
            />
            <AgoraView
              style={styles.flex}
              remoteUid={this.state.peerIds[1]}
              mode={1}
            />
          </View>
        ) : this.state.peerIds.length > 0 ? ( //view for videostream
          <AgoraView
            style={styles.flex}
            remoteUid={this.state.peerIds[0]}
            mode={1}
          />
        ) : (
          <View />
        )}
        {!this.state.vidMute ? ( //view for local video
          <AgoraView
            style={styles.localVideoStyle}
            zOrderMediaOverlay={true}
            showLocalVideo={true}
            mode={1}
          />
        ) : (
          <View />
        )}
        <View style={styles.buttonBar}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.toggleAudio();
            }}>
            <Icon
              name={this.state.audMute ? 'mic-off' : 'mic'}
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.endCall();
            }}>
            <Icon name="call-end" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.toggleVideo();
            }}>
            <Icon
              name={this.state.vidMute ? 'videocam-off' : 'videocam'}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return this.videoView();
  }
}
const styles = StyleSheet.create({
  buttonBar: {
    width: '80%',
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: '10%',
  },
  flex: {
    flex: 1,
  },
  halfFlex: {
    flex: 1 / 2,
    flexDirection: 'row',
  },
  localVideoStyle: {
    width: 140,
    height: 160,
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 100,
  },
  iconStyle: {
    fontSize: 60,
    paddingTop: 15,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 15,
    borderRadius: 0,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#000',
    opacity: 0.6,
    borderRadius: 100,
  },
});

export default VideoCall;
