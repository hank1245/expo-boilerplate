import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchPlace from '../components/Main/SearchPlace';
import Selected from '../components/Main/Selected';
import ControllerDetail from '../components/Main/ControllerDetail';
import SensorDetail from '../components/Main/SensorDetail';

export type MainStackParamList = {
  SearchPlace: undefined;
  Selected: undefined;
  ControllerDetail: undefined;
  SensorDetail: undefined;
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
      <Stack.Screen
        name="ControllerDetail"
        component={ControllerDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SensorDetail"
        component={SensorDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainPage;
