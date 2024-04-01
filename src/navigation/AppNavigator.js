/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
// AppNavigator.js
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import InternshipScreen from '../screens/InternshipScreen';
import JobsScreen from '../screens/JobsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CommonHeader from '../components/CommonHeader';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        header: props => <CommonHeader title="Home" {...props} />,
      }}
    />
    <Stack.Screen
      name="Internship"
      component={InternshipScreen}
      options={{
        header: props => <CommonHeader title="Internship" {...props} />,
      }}
    />
    <Stack.Screen
      name="Jobs"
      component={JobsScreen}
      options={{
        header: props => <CommonHeader title="Jobs" {...props} />,
      }}
    />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
