import {Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';
import tw from 'twrnc';
import React from 'react';
import {TimeType} from '../../../../../Types/StateTypes';
import {FreeTimeContainer} from './TimesVariant/FreeTime/FreeTimeContainer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const Time = React.memo(
  ({timeTitle, timeId, client, training}: TimeType) => {
    return (
      <View
        style={tw`w-full flex-row py-2 px-5 border-b border-gray-600 items-center`}>
        <Text style={tw`w-4/25 pr-2 text-base`}>{timeTitle}</Text>
        {client ? (
          training ? (
            <Text>time with training</Text>
          ) : (
            <Text>time with client</Text>
            // <TimeWithClientContainer timeId={timeId} client={client} />
          )
        ) : (
          <FreeTimeContainer timeId={timeId} />
        )}
      </View>
    );
  },
);
