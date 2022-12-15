import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {RootAuth} from './src/Tabs/Auth/RootAuth';
import {RootHome} from './src/Tabs/Home/RootHome';
import {RootChats} from './src/Tabs/Chats/RootChats';
import {RootTiming} from './src/Tabs/Timing/RootTiming';
import {RootProfile} from './src/Tabs/Profile/RootProfile';
import {RootTabParamList} from './src/Types/TabsNavigationsTypes';
import Icon from 'react-native-vector-icons/AntDesign';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const Tab = createBottomTabNavigator<RootTabParamList>();

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}: any) => ({
              tabBarIcon: ({focused, color, size}: any) => {
                let iconName = '';
                const routeName = route.name;
                color = focused ? 'orange' : 'grey';
                if (routeName === 'HomeTab') {
                  iconName = 'home';
                } else if (routeName === 'AuthTab') {
                  iconName = 'login';
                } else if (routeName === 'ChatsTab') {
                  iconName = 'wechat';
                } else if (routeName === 'TimingTab') {
                  iconName = 'calendar';
                } else if (routeName === 'ProfileTab') {
                  iconName = 'user';
                }
                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'orange',
              tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen
              name="AuthTab"
              component={RootAuth}
              options={{
                headerShown: false,
                title: 'Войти',
              }}
            />
            <Tab.Screen
              name="HomeTab"
              component={RootHome}
              options={{headerShown: false, title: 'Главная'}}
            />
            <Tab.Screen
              name="ChatsTab"
              component={RootChats}
              options={{headerShown: false, title: 'Чаты'}}
            />
            <Tab.Screen
              name="TimingTab"
              component={RootTiming}
              options={{headerShown: false, title: 'График'}}
            />
            <Tab.Screen
              name="ProfileTab"
              component={RootProfile}
              options={{headerShown: false, title: 'Профиль'}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
