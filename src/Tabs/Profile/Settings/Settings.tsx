import React from 'react';

import {Image, ScrollView, Text, View} from 'react-native';
import tw from 'twrnc';
import {RootProfileTabProps} from '../../../Types/TabsNavigationsTypes';

export const Settings: React.FC<any> = ({navigation}: RootProfileTabProps) => {
  // const {name, address, club, aboutMe} = useAppSelector(state => state.me.me);

  return (
    <ScrollView style={tw`p-5`}>
      <View style={tw`w-full flex-row`}>
        <View style={tw`w-2/5 justify-center item-center`}>
          <Image
            style={tw`w-25 h-25 rounded-full`}
            source={require('../img/ava-man.png')}
          />
          <Text style={tw`text-gray-600`}>Поменять аватар</Text>
        </View>
        {/*<View style={tw`w-3/5 justify-center`}>*/}
        {/*  <TouchableOpacity*/}
        {/*    style={tw`flex-row my-1`}*/}
        {/*    onPress={() => navigation.navigate('ProfileTab', { screen: 'ChangeName' })}*/}
        {/*  >*/}
        {/*    <Text style={tw`text-gray-600 p-1 w-1/3`}>Имя</Text>*/}
        {/*    <View style={tw`w-2/3 border-b border-gray-600 p-1`}>*/}
        {/*      <Text style={tw`text-gray-600 text-center`}>{name}</Text>*/}
        {/*    </View>*/}
        {/*  </TouchableOpacity>*/}
        {/*  <TouchableOpacity*/}
        {/*    style={tw`flex-row my-1`}*/}
        {/*    onPress={() => navigation.navigate('ProfileTab', { screen: 'ChangeAddress' })}*/}
        {/*  >*/}
        {/*    <Text style={tw`text-gray-600 p-1 w-1/3`}>Город</Text>*/}
        {/*    <View style={tw`w-2/3 border-b border-gray-600 p-1`}>*/}
        {/*      <Text style={tw`text-gray-600 text-center`}>{address}</Text>*/}
        {/*    </View>*/}
        {/*  </TouchableOpacity>*/}
        {/*  <TouchableOpacity*/}
        {/*    style={tw`flex-row my-1`}*/}
        {/*    onPress={() => navigation.navigate('ProfileTab', { screen: 'ChangeClub' })}*/}
        {/*  >*/}
        {/*    <Text style={tw`text-gray-600 p-1 w-1/3`}>Клуб</Text>*/}
        {/*    <View style={tw`w-2/3 border-b border-gray-600 p-1`}>*/}
        {/*      <Text style={tw`text-gray-600 text-center`}>{club}</Text>*/}
        {/*    </View>*/}
        {/*  </TouchableOpacity>*/}
        {/*</View>*/}
      </View>
      {/*<TouchableOpacity*/}
      {/*  style={tw`my-5 justify-center item-center`}*/}
      {/*  onPress={() => navigation.navigate('ProfileTab', { screen: 'ChangeAboutMe' })}*/}
      {/*>*/}
      {/*  <Text style={tw`text-gray-600 text-center`}>Обо мне</Text>*/}
      {/*  <Text style={tw`text-gray-600 text-center`}>{aboutMe}</Text>*/}
      {/*</TouchableOpacity>*/}
    </ScrollView>
  );
};
