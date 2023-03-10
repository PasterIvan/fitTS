import React from 'react';
import {RootTimingParamList} from '../../Types/TabsNavigationsTypes';
import {createStackNavigator} from '@react-navigation/stack';
import {Timing} from './Timing/Timing';
import {TrainingContainer} from './Training/TrainingContainer';

const TimingStack = createStackNavigator<RootTimingParamList>();

export const RootTiming = () => {
  return (
    <TimingStack.Navigator>
      <TimingStack.Screen
        name={'Timing'}
        component={Timing}
        options={{headerShown: false}}
      />
      <TimingStack.Screen
        name={'Training'}
        component={TrainingContainer}
        options={{title: 'Тренировка', headerBackTitle: 'График'}}
      />
    </TimingStack.Navigator>
  );
};
