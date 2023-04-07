import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchPlace from '../components/Main/SearchPlace';
import Selected from '../components/Main/Selected';

export type MainStackParamList = {
  SearchPlace: undefined;
  Selected: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainPage = () => {
  return (
    <Stack.Navigator initialRouteName="SearchPlace">
      <Stack.Screen
        name="SearchPlace"
        component={SearchPlace}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Selected"
        component={Selected}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainPage;
