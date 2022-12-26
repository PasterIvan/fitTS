import React from 'react';
import {ClientType} from '../../../../../../../Types/StateTypes';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import {CustomTextInput} from '../../../../../../../common/TextInput/CustomTextInput';

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
        <CustomTextInput
          onChangeInput={onChangeInput}
          cancelInput={cancelInputTraining}
          action={addTraining}
        />
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
