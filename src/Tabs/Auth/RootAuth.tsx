import React from 'react';
import {RootAuthParamList} from '../../Types/TabsNavigationsTypes';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from './Login';
import {Registration} from './Registration';

const AuthStack = createStackNavigator<RootAuthParamList>();

export const RootAuth = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name={'Login'} component={Login} />
      <AuthStack.Screen name={'Registration'} component={Registration} />
    </AuthStack.Navigator>
  );
};
