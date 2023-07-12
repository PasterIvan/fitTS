import React from 'react';
import {RootTimingParamList} from '../../Types/TabsNavigationsTypes';
import {createStackNavigator} from '@react-navigation/stack';
import {Timing} from './Timing/Timing';
import {TrainingContainer} from './Training/TrainingContainer';
import {AddTrainingModal} from './Modals/AddTrainingModal';
import {AddClientModalContainer} from './Modals/AddClientModalContainer';

const TimingStack = createStackNavigator<RootTimingParamList>();

export const RootTiming = () => {
  return (
    <TimingStack.Navigator>
      <TimingStack.Group>
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
      </TimingStack.Group>
      <TimingStack.Group screenOptions={{presentation: 'card'}}>
        <TimingStack.Screen
          name="AddClientModal"
          component={AddClientModalContainer}
          options={{title: 'Добавьте клиента', headerBackTitle: 'График'}}
        />
        <TimingStack.Screen
          name="AddTrainingModal"
          component={AddTrainingModal}
          options={{
            title: 'Добавьте тренировку',
            headerBackTitle: 'График',
          }}
        />
      </TimingStack.Group>
    </TimingStack.Navigator>
  );
};
