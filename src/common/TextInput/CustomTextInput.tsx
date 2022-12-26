import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';

type CustomTextInputProps = {
  cancelInput: () => void;
  onChangeInput: (value: string) => void;
  action: () => void;
};

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  onChangeInput,
  cancelInput,
  action,
}) => {
  return (
    <View style={tw`flex-row w-full pr-2 text-base items-center`}>
      <TextInput
        style={tw`w-15/25 h-full text-left mr-4`}
        multiline={true}
        numberOfLines={3}
        onChangeText={value => onChangeInput(value)}
        autoFocus={true}
        onEndEditing={cancelInput}
      />
      <View style={tw` items-center`}>
        <TouchableOpacity onPress={cancelInput}>
          <Text style={tw`px-2 pb-2 w-full text-base text-red-700`}>
            Отмена
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            action();
          }}>
          <Text style={tw`px-2 w-full text-base text-green-700`}>Добавить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
