import React, {useState} from 'react';
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
import {setPreview} from '../../../store/bll/timeReduser';
import {RootTimingTabProps} from '../../../Types/TabsNavigationsTypes';
import {useAppDispatch} from '../../../hooks/hooks';

export const Training: React.FC<any> = ({route}: RootTimingTabProps) => {
  const dispatch = useAppDispatch();
  const {timeId, time, client, training}: any = route.params;
  // const exercises = useAppSelector(state => state.exercises)
  // console.log(exercises)
  const [isInputPreview, setIsInputPreview] = useState(false);
  const [trainingPreview, setTrainingPreview] = useState('');

  const cancelInputPreview = () => {
    setTrainingPreview('');
    setIsInputPreview(false);
  };
  const addPreview = (timeId: string) => {
    dispatch(setPreview({timeId, trainingPreview}));
    setIsInputPreview(false);
  };

  const renderExercise: ListRenderItem<any> = ({item}) => (
    <Exercise
      exerciseId={item.exerciseId}
      exerciseName={item.exerciseName}
      description={item.description}
      isDone={item.isDone}
    />
  );
  return (
    <View>
      <View style={tw`flex-row px-5 pt-2 border-b border-gray-600`}>
        <View style={tw` pr-2 items-center`}>
          <Image
            style={tw`w-20 h-20 rounded-full`}
            source={require('../../Profile/img/ava-man.png')}
          />
          <Text style={tw`text-base text-gray-600`}>{client.clientName}</Text>
        </View>
        <View style={tw`w-3/4 justify-center`}>
          <Text style={tw`w-full text-base text-center`}>{time}</Text>
          <Text style={tw`text-lg font-medium text-center `}>
            {training.title}
          </Text>
          {training.preview ? (
            <Text style={tw`py-1 text-center text-gray-600`}>
              {training.preview}
            </Text>
          ) : isInputPreview ? (
            <View>
              <TextInput
                multiline={true}
                numberOfLines={3}
                onChangeText={setTrainingPreview}
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
                  onPress={() => addPreview(timeId)}
                />
              </View>
            </View>
          ) : (
            <Button
              title={'Добавить описание'}
              color={'orange'}
              onPress={() => setIsInputPreview(true)}
            />
          )}
        </View>
      </View>
      <Text style={tw`w-full py-2 text-lg font-medium text-center`}>
        Упражнения
      </Text>
      <FlatList
        data={training.exercises}
        renderItem={renderExercise}
        keyExtractor={exercise => exercise.exerciseId}
      />
      <Button title={'Добавить упражнение'} color={'green'} />
    </View>
  );
};
