import {
  Dimensions,
  FlatList,
  ListRenderItem,
  ScrollView,
  Text,
  View,
} from 'react-native';
import tw from 'twrnc';
import React, {Ref} from 'react';
import {ClientType, TimeType} from '../../../../../Types/StateTypes';
import {TimeWithClientContainer} from './TimesVariant/TimeWithClient/TimeWithClientContainer';
import {TimeWithTrainingContainer} from './TimesVariant/TimeWithTraining/TimeWithTrainingContainer';
import {ClientsInSearch} from './TimesVariant/FreeTime/SearchClient/ClientsInSearch';
import {FreeTime} from './TimesVariant/FreeTime/FreeTime';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type TimePropsType = {
  time: TimeType;
  clientFromSearch: ClientType;
  clientsFromSearch: ClientType[];
  isInputWrite: boolean;
  openInputWrite: () => void;
  cancelInputWrite: () => void;
  onChangeInput: (value: string) => void;
  writeClient: () => void;
  simultaneousHandlers: Ref<unknown> | Ref<unknown>[];
};

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.25;

export const Time: React.FC<TimePropsType> = React.memo(
  ({
    time,
    simultaneousHandlers,
    clientFromSearch,
    isInputWrite,
    cancelInputWrite,
    openInputWrite,
    onChangeInput,
    writeClient,
    clientsFromSearch,
  }) => {
    const translateX = useSharedValue(0);

    const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>(
      {
        onActive: event => {
          translateX.value = event.translationX;
        },
        onEnd: () => {
          const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
          if (shouldBeDismissed) {
            translateX.value = withTiming(-160);
          } else {
            translateX.value = withTiming(0);
          }
        },
      },
    );

    const rStyle = useAnimatedStyle(() => ({
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    }));

    const renderClient: ListRenderItem<ClientType> = ({item}) => (
      <ClientsInSearch {...item} />
    );
    return (
      <Animated.View>
        <View style={tw`absolute right-0 h-full flex-1`}>
          {time.training ? (
            <View
              style={tw`absolute right-20 bg-blue-400 w-20 h-full items-center justify-center`}>
              <Text style={tw`text-center text-red-700`}>
                Удалить тренировку
              </Text>
            </View>
          ) : (
            <View
              style={tw`absolute right-20 bg-blue-400 w-20 h-full items-center justify-center`}>
              <Text style={tw`text-center text-red-700`}>Инфо</Text>
            </View>
          )}
          {time.client ? (
            <View
              style={tw`bg-orange-400 w-20 h-full items-center justify-center`}>
              <Text style={tw`text-center text-red-700`}>Удалить клиента</Text>
            </View>
          ) : (
            ''
          )}
        </View>
        <PanGestureHandler
          simultaneousHandlers={simultaneousHandlers}
          onGestureEvent={panGesture}>
          <Animated.View
            style={[
              tw`bg-slate-100 w-full flex-row py-2 px-5 border-b border-gray-600 items-center`,
              rStyle,
            ]}>
            <Text style={tw`w-4/25 pr-2 text-base`}>{time.timeTitle}</Text>
            {time.client ? (
              time.training ? (
                <TimeWithTrainingContainer time={time} />
              ) : (
                <TimeWithClientContainer
                  timeId={time.timeId}
                  client={time.client}
                />
              )
            ) : (
              <FreeTime
                clientFromSearch={clientFromSearch}
                isInputWrite={isInputWrite}
                openInputWrite={openInputWrite}
                cancelInputWrite={cancelInputWrite}
                onChangeInput={onChangeInput}
                writeClient={writeClient}
              />
            )}
          </Animated.View>
        </PanGestureHandler>

        {isInputWrite ? (
          <ScrollView
            style={tw`bg-orange-400 rounded-lg px-2 w-full max-h-50 text-base text-green-700`}>
            <FlatList data={clientsFromSearch} renderItem={renderClient} />
          </ScrollView>
        ) : (
          ''
        )}
      </Animated.View>
    );
  },
);
