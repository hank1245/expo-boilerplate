import { useNavigation } from '@react-navigation/native';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../common/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../pages/MainPage';
import Controller from './Controller';
const { width, height } = Dimensions.get('window');

const Temperature = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <View
        style={{
          width,
          marginTop: 40,
          height: '100%',
          position: 'relative',
        }}
      >
        <View
          style={{
            alignItems: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 50,
          }}
        >
          <Text style={styles.title}>컨트롤러 1</Text>
        </View>
        <Controller />
        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 30,
            alignItems: 'center',
          }}
        >
          <Button
            onPress={() => navigation.goBack()}
            text="완료"
            style={{
              width: '85%',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 25,
  },
});

export default Temperature;
