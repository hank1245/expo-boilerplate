import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './src/pages/WelcomePage';
import SignUpPage from './src/pages/SignUpPage';
import SignInPage from './src/pages/SignInPage';
import { useRecoilValue } from 'recoil';
import { authState } from './src/atoms';
import MainPage from './src/pages/MainPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyPage from './src/pages/MyPage';
import Schedule from './src/pages/SchedulePage';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useEffect } from 'react';
import ErrorBoundary from './src/components/common/ErrorBoundary';
import ErrorScreen from './src/components/common/ErrorScreen';

export type StackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  SignIn: undefined;
};

export type TabParamList = {
  Main: undefined;
  MyPage: undefined;
  Schedule: undefined;
};

const AppInner = () => {
  const Stack = createNativeStackNavigator<StackParamList>();
  const Tab = createBottomTabNavigator();
  const user = useRecoilValue(authState);
  const isLoggedIn = !!user.email;
  return (
    <NavigationContainer>
      <ErrorBoundary fallback={<ErrorScreen />}>
        {!isLoggedIn ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={WelcomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignInPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Tab.Navigator>
            <Tab.Screen
              name="Main"
              component={MainPage}
              options={{
                headerShown: false,
                tabBarIcon: () => (
                  <Entypo name="home" size={24} color="black" />
                ),
                tabBarLabel: '메인',
              }}
            />
            <Tab.Screen
              name="Schedule"
              component={Schedule}
              options={{
                headerShown: false,
                tabBarIcon: () => (
                  <MaterialIcons name="schedule" size={24} color="black" />
                ),
                tabBarLabel: '스케쥴',
              }}
            />
            <Tab.Screen
              name="MyPage"
              component={MyPage}
              options={{
                headerShown: false,
                tabBarIcon: () => (
                  <Ionicons
                    name="person-circle-outline"
                    size={24}
                    color="black"
                  />
                ),
                tabBarLabel: '내정보',
              }}
            />
          </Tab.Navigator>
        )}
      </ErrorBoundary>
    </NavigationContainer>
  );
};

export default AppInner;
