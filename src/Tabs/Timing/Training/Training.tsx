import React from 'react';
import {
  Button,
  FlatList,
  Image,
  ListRenderItem,
  Text,
  TextInput,
  View,
} from 'react-native';
import tw from 'twrnc';
import {Exercise} from './Exercise/Exercise';
import {
  ClientType,
  ExerciseType,
  TrainingType,
} from '../../../Types/StateTypes';

type TrainingProps = {
  timeTitle: string;
  client: ClientType | undefined;
  training: TrainingType | undefined;
  isInputPreview: boolean;
  openInputPreview: () => void;
  cancelInputPreview: () => void;
  addPreview: () => void;
  onChangeInputPreview: (value: string) => void;
};

export const Training: React.FC<TrainingProps> = ({
  client,
  training,
  isInputPreview,
  timeTitle,
  openInputPreview,
  cancelInputPreview,
  onChangeInputPreview,
  addPreview,
}) => {
  const renderExercise: ListRenderItem<ExerciseType> = ({item}) => (
    <Exercise {...item} />
  );
  return (
    <View>
      <View style={tw`flex-row px-5 pt-2 border-b border-gray-600`}>
        <View style={tw` pr-2 items-center`}>
          <Image
            style={tw`w-20 h-20 rounded-full`}
            source={require('../../Profile/img/ava-man.png')}
          />
          <Text style={tw`text-base text-gray-600`}>{client!.clientName}</Text>
        </View>
        <View style={tw`w-3/4 justify-center`}>
          <Text style={tw`w-full text-base text-center`}>{timeTitle}</Text>
          <Text style={tw`text-lg font-medium text-center `}>
            {training!.trainingTitle}
          </Text>
          {training!.trainingDescription ? (
            <Text style={tw`py-1 text-center text-gray-600`}>
              {training!.trainingDescription}
            </Text>
          ) : isInputPreview ? (
            <View>
              <TextInput
                multiline={true}
                numberOfLines={3}
                onChangeText={value => onChangeInputPreview(value)}
                autoFocus={true}
                onEndEditing={cancelInputPreview}
              />
              <View style={tw`flex-row justify-center`}>
                <Button
                  title={'Отмена'}
                  color={'red'}
                  onPress={cancelInputPreview}
                />
                <Button
                  title={'Добавить'}
                  color={'green'}
                  onPress={() => addPreview()}
                />
              </View>
            </View>
          ) : (
            <Button
              title={'Добавить описание'}
              color={'orange'}
              onPress={openInputPreview}
            />
          )}
        </View>
      </View>
      <Text style={tw`w-full py-2 text-lg font-medium text-center`}>
        Упражнения
      </Text>
      <FlatList data={training!.exercises} renderItem={renderExercise} />
      <Button title={'Добавить упражнение'} color={'green'} />
    </View>
  );
};
