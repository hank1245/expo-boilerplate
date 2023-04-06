import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { useNavigation } from '@react-navigation/native';

const SignUpPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <View style={{ width: 261, marginTop: 40 }}>
        <Pressable
          style={{ position: 'absolute', zIndex: 1 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="ios-chevron-back" size={28} color="black" />
        </Pressable>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>SIGN UP</Text>
        </View>
      </View>
      <Input style={{ marginTop: '25%' }} placeholder="이메일" />
      <Input
        style={{ marginTop: 12 }}
        placeholder="비밀번호 (8~16자리)"
        secureTextEntry={true}
      />
      <Input
        style={{ marginTop: 12 }}
        placeholder="비밀번호 확인"
        secureTextEntry={true}
      />
      <Button
        text="회원가입"
        style={{ marginTop: 34 }}
        onPress={() => Alert.alert('회원가입이 완료되었습니다.')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
});

export default SignUpPage;
