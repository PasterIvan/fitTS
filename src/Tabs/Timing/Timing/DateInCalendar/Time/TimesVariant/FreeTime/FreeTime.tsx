import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';

type FreeTimeProps = {
  isInputWrite: boolean;
  openInputWrite: () => void;
  cancelInputWrite: () => void;
  onChangeInput: (value: string) => void;
  writeClient: () => void;
};

export const FreeTime: React.FC<FreeTimeProps> = ({
  isInputWrite,
  openInputWrite,
  cancelInputWrite,
  onChangeInput,
  writeClient,
}) => {
  return !isInputWrite ? (
    <View style={tw`w-full flex-row items-center`}>
      <Text style={tw` w-13/25 font-semibold text-center text-green-600`}>
        Свободное время
      </Text>
      <TouchableOpacity onPress={openInputWrite}>
        <Text style={tw`px-5 w-full text-base`}>Записать</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={tw`flex-row w-13/25 pr-2 text-base items-center`}>
      <TextInput
        style={tw`w-15/25 h-full text-left mr-4`}
        multiline={true}
        numberOfLines={3}
        onChangeText={value => onChangeInput(value)}
        autoFocus={true}
        onEndEditing={cancelInputWrite}
      />
      <TouchableOpacity onPress={() => cancelInputWrite()}>
        <Text style={tw`px-2 w-full text-base text-red-700`}>Отмена</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={writeClient}>
        <Text style={tw`px-2 w-full text-base text-green-700`}>Записать</Text>
      </TouchableOpacity>
    </View>
  );
};

// <Text style={tw`w-4/25 pr-2 text-base`}>{timeTitle}</Text>
//   {isInputWrite ? (
// <View style={tw`flex-row w-13/25 pr-2 text-base items-center`}>
//
//  {clientId !== '' ? (
//  <View style={tw`w-6/25 mr-1 items-center`}>
//    <Image  style={tw`w-7 h-7 rounded-full`}
//            source={require('../../../../../../Profile/img/ava-man.png') />
//  <Text style={tw`text-xs`}>{clientName}</Text>*/
//     </View>  ) : (   ''   )} <TextInput style={  clientId !== ''? tw`w-8/25 h-full text-left mr-4`
//   : tw`w-15/25 h-full text-left mr-4` } multiline={true} numberOfLines={3}
// }
//     onChangeText={value => setName(value)}
//       autoFocus={true}
//   onEndEditing={cancelInputWrite}/>
//  <TouchableOpacity onPress={cancelInputWrite}>
//  <Text style={tw`px-2 w-full text-base text-red-700`}>Отмена</Text>
//   <Text style={tw`px-2 w-full text-base text-green-700`}>
//    Записать
//   </Text>
//   </TouchableOpacity>
//  </View>
// ) : (
// <View style={tw`w-full flex-row items-center`}>
// </View>
// )}
// {isInputWrite ? (
//  <ScrollView
//  style={tw`bg-orange-400 px-2 w-full max-h-50 text-base text-green-700`}>
//  <FlatList data={clientsFromSearch} renderItem={renderClient} />
//  </ScrollView>
//
//   ) : (
//
//     ''
//
//   )}
