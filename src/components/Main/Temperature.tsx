import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../common/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../pages/MainPage';
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
          width: '85%',
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

        <Button
          onPress={() => navigation.goBack()}
          text="완료"
          style={{ width: '100%', position: 'absolute', bottom: 30 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
});

export default Temperature;
