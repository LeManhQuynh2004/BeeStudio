import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/View/HomeScreen';
import Ao_cuoi from './src/View/Ao_cuoi';
import Dich_vu from './src/View/Dich_vu';
import Chitiet_aocuoi from './src/View/Chitiet_aocuoi';
import Chitiet_dichvu from './src/View/Chitiet_dichvu';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Trang chủ">
      <Drawer.Screen name="Trang chủ" component={HomeScreen} />
      <Drawer.Screen name="Áo cưới" component={Ao_cuoi} />
      <Drawer.Screen name="Dịch vu" component={Dich_vu} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Trang chủ">
        <Stack.Screen
          name="Trang chủ"
          component={MyDrawer}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Áo cưới"
          component={Ao_cuoi}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dịch vu"
          component={Dich_vu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chitiet_aocuoi"
          component={Chitiet_aocuoi}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chitiet_dichvu"
          component={Chitiet_dichvu}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
