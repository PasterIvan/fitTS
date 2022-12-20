import React from 'react';
import {FlatList, ListRenderItem, Text, View} from 'react-native';
import tw from 'twrnc';
import {useAppSelector} from '../../../../hooks/hooks';
import {TimeType} from '../../../../Types/StateTypes';
import {Time} from './Time/Time';

export const DateInCalendar = () => {
  const selectedDate = useAppSelector(state => state.date.dateForCalendar);
  const times = useAppSelector(state => state.times.times);

  const renderTime: ListRenderItem<TimeType> = ({item}) => <Time {...item} />;
  return (
    <View style={tw`flex-1`}>
      <Text style={tw`text-center`}>
        {`${selectedDate.getDate()}.${
          +selectedDate.getMonth() + 1
        }.${selectedDate.getFullYear()}`}
      </Text>
      <View
        style={tw`w-full flex-row py-2 px-4 border-b border-gray-600 items-center`}>
        <Text style={tw`w-4/25`}>Время</Text>
        <Text style={tw`w-5/25 text-center`}>Клиент</Text>
        <Text style={tw` w-8/25 text-center`}>Тренировка</Text>
        <Text style={tw` w-4/14 text-center`}>Описание</Text>
      </View>
      <FlatList data={times} renderItem={renderTime} />
    </View>
  );
};
