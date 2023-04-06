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
import Schedule from './src/pages/Schedule';

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
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Schedule"
            component={Schedule}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="MyPage"
            component={MyPage}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppInner;
