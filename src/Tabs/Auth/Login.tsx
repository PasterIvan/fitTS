import React from 'react';
import tw from 'twrnc';
import {Button, Text, TextInput, View} from 'react-native';
import {useAppNavigation} from '../../hooks/hooks';

export const Login = () => {
  const navigation = useAppNavigation();
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-gray-600`}>Логин</Text>
      <TextInput style={tw`w-2/5 p-1 border border-gray-500 rounded-lg`} />
      <Text style={tw`text-gray-600`}>Пороль</Text>
      <TextInput style={tw`w-2/5 p-1 border border-gray-500 rounded-lg`} />
      <Button
        title="Войти"
        onPress={() =>
          navigation.navigate(
            'ProfileTab',
            {screen: 'MeProfile'} /*{ id: 1, name: 'Ivan' }*/,
          )
        }
      />
      <Text style={tw`text-gray-600`}>Вы еще не зарегистрированы?</Text>
      <Button
        title="Зарегистрироваться"
        onPress={() => navigation.navigate('AuthTab', {screen: 'Registration'})}
      />
    </View>
  );
};
