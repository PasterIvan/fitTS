import {Image, ScrollView, Text, View} from 'react-native';
import {WithSafeAreaView} from '../../../ComponentHelper/WithSafeAreaView';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/AntDesign';
import {useAppSelector} from '../../../hooks/hooks';
import {RootProfileTabProps} from '../../../Types/TabsNavigationsTypes';
import React from 'react';

export const MeProfile: React.FC<any> = ({navigation}: RootProfileTabProps) => {
  const {name, address, club, aboutMe} = useAppSelector(state => state.me.me);

  return (
    <WithSafeAreaView>
      <View style={tw`flex-1`}>
        <View style={tw`w-full p-5 flex-row`}>
          <Image
            style={tw`w-35 h-35 rounded-full`}
            source={require('../img/ava-man.png')}
          />
          <View style={tw`justify-between mx-5 w-2/5`}>
            <Text style={tw`text-gray-600 text-left`}>{name}</Text>
            <Text style={tw`text-gray-600 text-left`}>{address}</Text>
            <Text style={tw`text-gray-600 text-left`}>{club}</Text>
          </View>
          <Icon
            name="edit"
            size={30}
            color="grey"
            onPress={() =>
              navigation.navigate('ProfileTab', {screen: 'Settings'})
            }
          />
        </View>
        <View style={tw`h-50 mt-5`}>
          <ScrollView>
            <Text style={tw`text-gray-600`}>{aboutMe}</Text>
          </ScrollView>
        </View>
      </View>
    </WithSafeAreaView>
  );
};
