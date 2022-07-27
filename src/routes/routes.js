import React from 'react';
import Rewards from '../screens/Rewards';
import Home from '../screens/Home';
import Learn from '../screens/Learn';
import Market from '../screens/Market';
import VoucherDetail from '../screens/VoucherDetail';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Market') {
            iconName = focused ? 'bar-chart-sharp' : 'bar-chart-outline';
          } else if (route.name === 'Learn') {
            iconName = focused
              ? 'ellipsis-vertical-circle-sharp'
              : 'ellipsis-vertical-circle-outline';
          } else if (route.name === 'Rewards') {
            iconName = focused ? 'star' : 'star-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#73FDAA',
        tabBarInactiveTintColor: '#FFF',
        tabBarStyle: {
          backgroundColor: '#323232',
          paddingHorizontal: 15,
          paddingVertical: 5,
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="Learn" component={Learn} />
      <Tab.Screen name="Rewards" component={Rewards} />
    </Tab.Navigator>
  );
};
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={({route}) => ({headerShown: false})}>
        <Stack.Screen
          name="Tab"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen name="VoucherDetail" component={VoucherDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
