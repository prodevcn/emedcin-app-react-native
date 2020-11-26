import React, {Component} from 'react';
import {Animated, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Onboarding from '../screens/Onboarding';
import LoginScreen from '../screens/LoginScreen';
import ForgotPwdScreen from '../screens/ForgotPwdScreen';
import ResetPwdScreen from '../screens/ResetPwdScreen';
import RegisterScreen from '../screens/RegisterScreen';
import IDScreen from '../screens/RegisterScreen/IDScreen';
import MainScreen from '../screens/MainScreen';
import RegisterSuccessScreen from '../screens/RegisterScreen/ResigerSuccessScreen';
import UploadSuccessScreen from '../screens/RegisterScreen/UploadSuccessScreen';
import PatientFirstScreen from '../screens/RegisterScreen/Patient/PatientFirstScreen';
import PatientSecondScreen from '../screens/RegisterScreen/Patient/PatientSecondScreen';
import DoctorFirstScreen from '../screens/RegisterScreen/Doctor/DoctorFirstScreen';
import DoctorSecondScreen from '../screens/RegisterScreen/Doctor/DoctorSecondScreen';
import DoctorThirdScreen from '../screens/RegisterScreen/Doctor/DoctorThirdScreen';
import EditProfileFirstPage from '../sub_screens/EditProfileScreen/EditProfileFirstPage';
import EditProfileSecondPage from '../sub_screens/EditProfileScreen/EditProfileSecondPage';
import EditProfileThirdPage from '../sub_screens/EditProfileScreen/EditProfileThirdPage';
import InstitutionTypeScreen from '../sub_screens/InstitutionScreen/add/InstitutionTypeScreen';
import InstitutionRegisterFirstScreen from '../sub_screens/InstitutionScreen/add/InstitutionRegisterFirstScreen';
import InstitutionRegisterSecondScreen from '../sub_screens/InstitutionScreen/add/InstitutionRegisterSecondScreen';
import InstitutionRegisterThirdScreen from '../sub_screens/InstitutionScreen/add/InstitutionRegisterThirdScreen';
import InstitutionRegisterSuccess from '../sub_screens/InstitutionScreen/add/InstitutionRegisterSuccess';
import BookAppointment from '../sub_screens/AppointmentsScreen/book/BookAppointment';
import BookHomeAppointmentPage1 from '../sub_screens/AppointmentsScreen/book/BookHomeAppointmentPage1';
import BookHomeAppointmentPage2 from '../sub_screens/AppointmentsScreen/book/BookHomeAppointmentPage2';
import BookSuccess from '../sub_screens/AppointmentsScreen/book/BookSuccess';
import DeleteAccount from '../sub_screens/SettingScreen/DeleteAccount';
import AsyncStorage from '@react-native-community/async-storage';
import DeleteSuccess from '../sub_screens/SettingScreen/DeleteSuccess';
import VideoCall from '../sub_screens/VideoCall';
const Stack = createStackNavigator();
const forFade = ({current, next}) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0,
  ).interpolate({
    inputRange: [0, 0, 2],
    outputRange: [0, 10, 0],
  });
  return {
    leftButtonStyle: {opacity},
    rightButtonStyle: {opacity},
    titleStyle: {opacity},
    backgroundStyle: {opacity},
  };
};
const headerOption = {
  headerTintColor: 'purple',
  headerStyle: {backgroundColor: '#f20530'},
  headerStyleInterpolator: forFade,
  headerShown: false,
};
const headerOption_1 = {
  headerTintColor: 'rgba(0, 0, 0, 0.5)',
  headerStyle: {backgroundColor: 'transparent', elevation: 0},
  headerStyleInterpolator: forFade,
  headerShown: true,
  headerTitle: '',
};
function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={headerOption}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={headerOption}
      />
      <Stack.Screen
        name="ForgotPwd"
        component={ForgotPwdScreen}
        options={headerOption_1}
      />
      <Stack.Screen
        name="ResetPwd"
        component={ResetPwdScreen}
        options={headerOption_1}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={headerOption_1}
      />
      <Stack.Screen
        name="RegisterSuccess"
        component={RegisterSuccessScreen}
        options={headerOption}
      />
      <Stack.Screen name="ID" component={IDScreen} options={headerOption} />
      <Stack.Screen
        name="UploadSuccess"
        component={UploadSuccessScreen}
        options={headerOption}
      />
      <Stack.Screen name="Main" component={MainScreen} options={headerOption} />
      <Stack.Screen
        name="PatientFirst"
        component={PatientFirstScreen}
        options={headerOption_1}
      />
      <Stack.Screen
        name="PatientSecond"
        component={PatientSecondScreen}
        options={headerOption_1}
      />
      <Stack.Screen
        name="DoctorFirst"
        component={DoctorFirstScreen}
        options={headerOption_1}
      />
      <Stack.Screen
        name="DoctorSecond"
        component={DoctorSecondScreen}
        options={headerOption_1}
      />
      <Stack.Screen
        name="DoctorThird"
        component={DoctorThirdScreen}
        options={headerOption_1}
      />
      <Stack.Screen
        name="EditProfileFirstPage"
        component={EditProfileFirstPage}
        options={headerOption_1}
      />
      <Stack.Screen
        name="EditProfileSecondPage"
        component={EditProfileSecondPage}
        options={headerOption}
      />
      <Stack.Screen
        name="EditProfileThirdPage"
        component={EditProfileThirdPage}
        options={headerOption}
      />
      <Stack.Screen
        name="InstitutionType"
        component={InstitutionTypeScreen}
        options={headerOption_1}
      />
      <Stack.Screen
        name="InstitutionReg1"
        component={InstitutionRegisterFirstScreen}
        options={headerOption_1}
      />
      <Stack.Screen
        name="InstitutionReg2"
        component={InstitutionRegisterSecondScreen}
        options={headerOption_1}
      />
      <Stack.Screen
        name="InstitutionReg3"
        component={InstitutionRegisterThirdScreen}
        options={headerOption_1}
      />
      <Stack.Screen
        name="InstitutionSuccess"
        component={InstitutionRegisterSuccess}
        options={headerOption}
      />
      <Stack.Screen
        name="BookAppointment"
        component={BookAppointment}
        options={headerOption_1}
      />
      <Stack.Screen
        name="BookHomeAppointmentPage1"
        component={BookHomeAppointmentPage1}
        options={headerOption_1}
      />
      <Stack.Screen
        name="BookHomeAppointmentPage2"
        component={BookHomeAppointmentPage2}
        options={headerOption_1}
      />
      <Stack.Screen
        name="BookSuccess"
        component={BookSuccess}
        options={headerOption}
      />
      <Stack.Screen
        name="DeleteAccount"
        component={DeleteAccount}
        options={headerOption_1}
      />
      <Stack.Screen
        name="DeleteSuccess"
        component={DeleteSuccess}
        options={headerOption}
      />
      <Stack.Screen
        name="VideoCall"
        component={VideoCall}
        options={headerOption}
      />
    </Stack.Navigator>
  );
}
export default class App extends Component {
  constructor(props) {
    super(props);
    (async () => {
      AsyncStorage.clear();
    })();
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <NavigationContainer>
        <StatusBar hidden={true} />
        <RootStack />
      </NavigationContainer>
    );
  }
}
