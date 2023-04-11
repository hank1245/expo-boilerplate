import { useNavigation } from '@react-navigation/native';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SensorDetail = () => {
  const navgiation = useNavigation();
  return (
    <SafeAreaView
      style={{ alignItems: 'center', backgroundColor: 'white', flex: 1 }}
    >
      <View style={{ width: '85%', marginTop: 40 }}>
        <View
          style={{
            alignItems: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.title}>센서 1</Text>
          <Pressable onPress={() => navgiation.goBack()}>
            <Text style={{ color: 'gray', fontSize: 20 }}>로그아웃</Text>
          </Pressable>
        </View>
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

export default SensorDetail;
