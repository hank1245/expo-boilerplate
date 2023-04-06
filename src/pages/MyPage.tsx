import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const MyPage = () => {
  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <View style={{ width: '90%', marginTop: 40 }}>
        <View style={{ alignItems: 'flex-start' }}>
          <Text style={styles.title}>내 정보</Text>
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

export default MyPage;
