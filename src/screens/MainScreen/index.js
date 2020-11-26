import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
// import navigation
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
// import assets
import Icon from 'react-native-vector-icons/Ionicons';
import MenuIcon from 'react-native-vector-icons/FontAwesome';
import Globals from '../../constants/Globals';
// import screens
import HomeScreen from '../../sub_screens/HomeScreen';
import ProfileScreen from '../../sub_screens/ProfileScreen';
import Logout from '../../sub_screens/Logout';
import SearchScreen from '../../sub_screens/SearchScreen';
import NotificationScreen from '../../sub_screens/NotificationScreen';
import UploadScreen from '../../sub_screens/UploadScreen';
import UploadForm from '../../sub_screens/UploadScreen/UploadForm';
import InstitutionScreen from '../../sub_screens/InstitutionScreen';
import SettingScreen from '../../sub_screens/SettingScreen';
import AppointmentsScreen from '../../sub_screens/AppointmentsScreen';
import ForumScreen from '../../sub_screens/ForumScreen';
import NewsScreen from '../../sub_screens/NewsScreen';
import ConnectionsScreen from '../../sub_screens/ConnectionsScreen';
import PaymentScreen from '../../sub_screens/PaymentScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} showsHorizontalScrollIndicator={false}>
      <View style={styles.logo_area}>
        <Image
          source={require('../../../assets/images/splash/logo.png')}
          style={styles.logo}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function SubStack() {
  return (
    <Stack.Navigator initialRouteName="UploadScreen">
      <Stack.Screen
        name="UploadScreen"
        component={UploadScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadForm"
        component={UploadForm}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerType="slide"
      drawerStyle={styles.drawer}
      drawerPosition="right"
      drawerContentOptions={{
        inactiveTintColor: 'white',
        activeTintColor: '#f20530',
        activeBackgroundColor: 'transparent',
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          drawerIcon: ({color, size}) => (
            <MenuIcon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <MenuIcon name="user-o" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Search For Doctor"
        component={SearchScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="md-search" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Documents/Uploads"
        component={SubStack}
        options={{
          drawerIcon: ({color, size}) => (
            <MenuIcon name="sticky-note-o" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Connections"
        component={ConnectionsScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <MenuIcon name="users" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Institutions"
        component={InstitutionScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <MenuIcon name="hospital-o" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Appointments"
        component={AppointmentsScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="md-calendar" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Payments"
        component={PaymentScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="ios-cash" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Forum"
        component={ForumScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="md-chatboxes" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="News"
        component={NewsScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="logo-hackernews" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="ios-settings" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="ios-notifications-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerIcon: ({color, size}) => (
            <MenuIcon name="sign-out" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default class MainScreen extends Component {
  constructor() {
    super();
  }
  render() {
    return <MainDrawer />;
  }
}
const styles = StyleSheet.create({
  logo_area: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawer: {
    backgroundColor: Globals.BASE_COLOR,
  },
  logo: {
    width: 120,
    height: 120,
  },
  bottomSheet: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
