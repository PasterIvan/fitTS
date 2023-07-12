import React from 'react';
import {ListRenderItem, Text, View} from 'react-native';
import tw from 'twrnc';
import {useAppSelector} from '../../../../hooks/hooks';
import {Time} from './Time/Time';
import {TimeType} from '../../../../Types/StateTypes';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

export const DateInCalendar = () => {
  const selectedDate = useAppSelector(state => state.date.dateForCalendar);
  const times = useAppSelector(state => state.times.times);
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const renderTime: ListRenderItem<TimeType> = ({item}) => (
    <Time scrollY={scrollY} {...item} />
  );
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
      {/*<ScrollView ref={scrollRef}>*/}
      {/*  {times.map(time => (*/}
      {/*    <Time*/}
      {/*      key={time.timeId}*/}
      {/*      time={time}*/}
      {/*      simultaneousHandlers={scrollRef}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</ScrollView>*/}
      <Animated.FlatList
        data={times}
        renderItem={renderTime}
        style={{flex: 1}}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />
    </View>
  );
};
