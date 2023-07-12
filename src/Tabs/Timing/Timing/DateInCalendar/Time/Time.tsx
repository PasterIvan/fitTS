import {Alert, Dimensions, Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import React, {useEffect, useState} from 'react';
import {TimeType} from '../../../../../Types/StateTypes';
import {FreeTime} from './TimesVariant/FreeTime/FreeTime';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {useAppDispatch} from '../../../../../hooks/hooks';
import {repealTrainingTC} from '../../../../../store/bll/timesReduser';
import Animated, {
  cancelAnimation,
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {TimeWithClient} from './TimesVariant/TimeWithClient/TimeWithClient';
import {TimeWithTrainingContainer} from './TimesVariant/TimeWithTraining/TimeWithTrainingContainer';

type ContextType = {
  translateX: number;
};

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.1;

export const Time = (time: TimeType & {scrollY: SharedValue<number>}) => {
  const dispatch = useAppDispatch();
  const [translateX_, setTranslateX] = useState(0);
  useEffect(() => {
    setTranslateX(0);
  }, [time.scrollY.value]);
  const translateX = useSharedValue(translateX_);
  const panGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >(
    {
      onStart: (event, context) => {
        context.translateX = translateX.value;
        translateX.value = withSpring(0);
      },
      onActive: (event, context) => {
        translateX.value = event.translationX + context.translateX;
      },
      onEnd: () => {
        const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
        if (shouldBeDismissed) {
          translateX.value = withSpring(-133);
        } else {
          translateX.value = withSpring(0);
        }
      },
      onCancel: () => {
        cancelAnimation(translateX);
      },
    },
    [time.scrollY],
  );

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const repealTraining = () => {
    Alert.alert(
      'Внимание!',
      `Вы действительно хотите отменить тренировку в ${time.timeTitle} с ${time.client?.clientName}?`,
      [
        {
          text: 'Назад',
        },
        {
          text: 'Подтвердить',
          onPress: () => {
            dispatch(repealTrainingTC(time));
          },
        },
      ],
    );
  };
  return (
    <Animated.View>
      <View style={tw`absolute right-1 h-full flex-1 justify-center`}>
        {time.client ? (
          time.training ? (
            <TouchableOpacity
              onPress={repealTraining}
              style={tw`bg-red-500 w-30 h-7/10 my-1 border border-red-800  rounded-xl items-center justify-center`}>
              <Text style={tw`text-center text-xs font-bold text-slate-50`}>
                Отменить тренировку
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={tw`flex-row h-7/10 my-1`}>
              <TouchableOpacity
                onPress={repealTraining}
                style={tw`bg-red-500 w-30 border border-red-800  rounded-xl items-center justify-center`}>
                <Text style={tw`text-center text-xs font-bold text-slate-50`}>
                  Отменить тренировку
                </Text>
              </TouchableOpacity>
            </View>
          )
        ) : (
          <View
            style={tw`bg-green-500 w-30 h-6/10 my-1 border  border-green-700 rounded-lg items-center justify-center`}>
            <Text style={tw`text-center font-bold text-slate-50`}>Инфо</Text>
          </View>
        )}
      </View>
      <PanGestureHandler
        onGestureEvent={panGesture}
        failOffsetY={[-1, 1]}
        activeOffsetX={[-1, 1]}>
        <Animated.View
          style={[
            tw`bg-stone-100 w-9.9/10 flex-row py-2 px-5 m-0.5 border rounded-lg border-gray-600 items-center`,
            rStyle,
          ]}>
          <Text style={tw`w-4/25 pr-2 text-base`}>{time.timeTitle}</Text>
          {time.client ? (
            time.training ? (
              <TimeWithTrainingContainer time={time} />
            ) : (
              <TimeWithClient time={time} />
            )
          ) : (
            <FreeTime time={time} />
          )}
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};
