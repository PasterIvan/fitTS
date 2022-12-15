import React from 'react';

import {Button, Text, TextInput, View} from 'react-native';
import tw from 'twrnc';
import {RootAuthTabProps} from '../../Types/TabsNavigationsTypes';

export const Registration: React.FC<any> = ({navigation}: RootAuthTabProps) => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-gray-600`}>Логин</Text>
      <TextInput
        style={tw`w-2/5 p-1 border border-gray-500 rounded-lg`}></TextInput>
      <Text style={tw`text-gray-600`}>Пороль</Text>
      <TextInput
        style={tw`w-2/5 p-1 border border-gray-500 rounded-lg`}></TextInput>
      <Text style={tw`text-gray-600`}>Повторите пороль</Text>
      <TextInput
        style={tw`w-2/5 p-1 border border-gray-500 rounded-lg`}></TextInput>
      <Button
        title="Зарегистрироваться"
        onPress={() => navigation.navigate('ProfileTab', {screen: 'MeProfile'})}
      />
      <Text style={tw`text-gray-600`}>У вас уже есть аккаунт?</Text>
      <Button title="Войти" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};
