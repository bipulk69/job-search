/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import InternshipScreen from '../screens/InternshipScreen';
import JobsScreen from '../screens/JobsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SideDrawer from '../components/SideDrawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Internship') {
              iconName = focused ? 'work' : 'work';
            } else if (route.name === 'Jobs') {
              iconName = focused ? 'list' : 'list';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person';
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          header: props => <Header {...props} name={route.name} />,
        })}
        tabBarOptions={{
          activeTintColor: '#008DDA',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Internship"
          component={InternshipScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Jobs"
          component={JobsScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <SideDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Tabs" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
