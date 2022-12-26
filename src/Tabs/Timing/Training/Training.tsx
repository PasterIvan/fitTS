import React from 'react';
import {Button, Image, Text, TextInput, View} from 'react-native';
import tw from 'twrnc';
import {ClientType} from '../../../Types/StateTypes';
import {ExercisesContainer} from './Exercises/ExercisesContainer';

type TrainingProps = {
  timeTitle: string;
  client: ClientType | undefined;
  trainingTitle: string;
  trainingDescription: string | undefined;
  isInputDescription: boolean;
  openInputDescription: () => void;
  cancelInputDescription: () => void;
  addDescription: () => void;
  onChangeInputDescription: (value: string) => void;
  // exercises: ExerciseType[] | undefined;
  // addExercise: () => void;
};

export const Training: React.FC<TrainingProps> = ({
  client,
  trainingTitle,
  trainingDescription,
  isInputDescription,
  timeTitle,
  openInputDescription,
  cancelInputDescription,
  onChangeInputDescription,
  addDescription,
}) => {
  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-row px-5 pt-2 border-b border-gray-600`}>
        <View style={tw` pr-2 items-center`}>
          <Image
            style={tw`w-20 h-20 rounded-full`}
            source={require('../../Profile/img/ava-man.png')}
          />
          <Text style={tw`text-base text-gray-600`}>{client?.clientName}</Text>
        </View>
        <View style={tw`w-3/4 justify-center`}>
          <Text style={tw`w-full text-base text-center`}>{timeTitle}</Text>
          <Text style={tw`text-lg font-medium text-center `}>
            {trainingTitle}
          </Text>
          {trainingDescription ? (
            <Text style={tw`py-1 text-center text-gray-600`}>
              {trainingDescription}
            </Text>
          ) : isInputDescription ? (
            <View>
              <TextInput
                multiline={true}
                numberOfLines={3}
                onChangeText={value => onChangeInputDescription(value)}
                autoFocus={true}
                onEndEditing={cancelInputDescription}
              />
              <View style={tw`flex-row justify-center`}>
                <Button
                  title={'Отмена'}
                  color={'red'}
                  onPress={cancelInputDescription}
                />
                <Button
                  title={'Добавить'}
                  color={'green'}
                  onPress={() => addDescription()}
                />
              </View>
            </View>
          ) : (
            <Button
              title={'Добавить описание'}
              color={'orange'}
              onPress={openInputDescription}
            />
          )}
        </View>
      </View>
      <ExercisesContainer />
    </View>
  );
};
