import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackScreenProps} from '@react-navigation/stack';
import {TimeType} from './StateTypes';

export type RootTabParamList = {
  AuthTab: NavigatorScreenParams<RootAuthParamList>;
  HomeTab: undefined;
  ChatsTab: undefined;
  ProfileTab: NavigatorScreenParams<RootProfileParamList>;
  TimingTab: NavigatorScreenParams<RootTimingParamList>;
};
export type RootAuthParamList = {
  Login: undefined;
  Registration: undefined;
};
export type RootProfileParamList = {
  MeProfile: undefined;
  Settings: undefined;
};
export type RootTimingParamList = {
  Timing: undefined;
  Training: undefined;
};

export type AuthTabProps = NativeStackScreenProps<RootTabParamList, 'AuthTab'>;
export type LoginProps = NativeStackScreenProps<RootAuthParamList, 'Login'>;

export type HomeTabProps = NativeStackScreenProps<RootTabParamList, 'HomeTab'>;

export type ChatsTabProps = NativeStackScreenProps<
  RootTabParamList,
  'ChatsTab'
>;

export type TimingTabProps = NativeStackScreenProps<
  RootTabParamList,
  'TimingTab'
>;
export type TimingProps = NativeStackScreenProps<RootTimingParamList, 'Timing'>;
export type TrainingProps = NativeStackScreenProps<
  RootTimingParamList,
  'Training'
>;

export type ProfileTabProps = NativeStackScreenProps<
  RootTabParamList,
  'ProfileTab'
>;
export type RootAuthTabProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'AuthTab'>,
  StackScreenProps<RootAuthParamList>
>;
export type RootProfileTabProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'ProfileTab'>,
  StackScreenProps<RootProfileParamList>
>;
export type RootTimingTabProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'TimingTab'>,
  StackScreenProps<RootTimingParamList>
>;
