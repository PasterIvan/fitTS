import React from 'react';
import {ClientType} from '../../../../../../../Types/StateTypes';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';

type TimeWithClientProps = {
  client: ClientType;
  isInputTraining: boolean;
  openInputTraining: () => void;
  cancelInputTraining: () => void;
  onChangeInput: (value: string) => void;
  addTraining: () => void;
};

export const TimeWithClient: React.FC<TimeWithClientProps> = ({
  client,
  isInputTraining,
  openInputTraining,
  cancelInputTraining,
  onChangeInput,
  addTraining,
}) => {
  return (
    <View style={tw`w-full flex-row items-center`}>
      <View style={tw`w-5/25 pr-2 items-center`}>
        <Image
          style={tw`w-10 h-10 rounded-full`}
          source={require('../../../../../../Profile/img/ava-man.png')}
        />
        <Text style={tw`text-gray-600`}>{client.clientName}</Text>
      </View>
      {isInputTraining ? (
        <View style={tw`flex-row w-13/25 pr-2 text-base items-center`}>
          <TextInput
            style={tw`w-15/25 h-full text-left mr-4`}
            multiline={true}
            numberOfLines={3}
            onChangeText={value => onChangeInput(value)}
            autoFocus={true}
            onEndEditing={cancelInputTraining}
          />
          <View style={tw` items-center`}>
            <TouchableOpacity onPress={cancelInputTraining}>
              <Text style={tw`px-2 pb-2 w-full text-base text-red-700`}>
                Отмена
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                addTraining();
              }}>
              <Text style={tw`px-2 w-full text-base text-green-700`}>
                Добавить
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={openInputTraining}>
          <Text style={tw`px-5 w-full text-base text-orange-400`}>
            Добавить тренировку
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
