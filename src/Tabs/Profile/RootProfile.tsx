import React from 'react';
import {RootProfileParamList} from '../../Types/TabsNavigationsTypes';
import {createStackNavigator} from '@react-navigation/stack';
import {MeProfile} from './MeProfile/MeProfile';
import {Settings} from './Settings/Settings';

const ProfileStack = createStackNavigator<RootProfileParamList>();

export const RootProfile = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={'MeProfile'}
        component={MeProfile}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name={'Settings'}
        component={Settings}
        options={{
          title: 'Настройки',
          headerBackTitle: 'Профиль',
          // headerBackTitleStyle: { color: 'orange' },
        }}
      />
      {/*<ProfileStack.Screen*/}
      {/*  name={'ChangeName'}*/}
      {/*  component={ChangeName}*/}
      {/*  options={{ title: 'Изменить имя' }}*/}
      {/*/>*/}
      {/*<ProfileStack.Screen*/}
      {/*  name={'ChangeAddress'}*/}
      {/*  component={ChangeAddress}*/}
      {/*  options={{ title: 'Изменить адрес' }}*/}
      {/*/>*/}
      {/*<ProfileStack.Screen*/}
      {/*  name={'ChangeClub'}*/}
      {/*  component={ChangeClub}*/}
      {/*  options={{ title: 'Изменить клуб' }}*/}
      {/*/>*/}
      {/*<ProfileStack.Screen*/}
      {/*  name={'ChangeAboutMe'}*/}
      {/*  component={ChangeAboutMe}*/}
      {/*  options={{ title: 'Обо мне' }}*/}
      {/*/>*/}
    </ProfileStack.Navigator>
  );
};
