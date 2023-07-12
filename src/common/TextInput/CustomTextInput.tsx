import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';

type CustomTextInputProps = {
  cancelModal: () => void;
  onChangeInput: (value: string) => void;
  action: () => void;
  disabled: boolean;
};

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  onChangeInput,
  cancelModal,
  action,
  disabled,
}) => {
  return (
    <View style={tw`w-full flex-row text-base items-center`}>
      <TextInput
        style={tw`w-9/25 h-full text-base text-left mx-4`}
        multiline={true}
        numberOfLines={3}
        onChangeText={value => onChangeInput(value)}
        autoFocus={true}
        onEndEditing={cancelModal}
      />
      <View style={tw`w-7/25 items-center`}>
        <TouchableOpacity
          style={tw`w-full bg-red-500 border border-red-800 rounded-xl my-0.5 py-4 items-center`}
          onPress={cancelModal}>
          <Text style={tw`text-base font-bold text-slate-50 `}>Отмена</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`w-full bg-green-500 border border-green-800 rounded-xl my-0.5 py-4 items-center`}
          onPress={action}
          disabled={disabled}>
          <Text style={tw`text-base font-bold text-slate-50`}>Добавить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
