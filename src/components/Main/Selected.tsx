import { useNavigation } from '@react-navigation/native';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const Selected = ({ route }: any) => {
  const navigation = useNavigation();
  const { name } = route.params;
  //params로 받아온 정보를 통해서 (원래는 매장id) get요청 보내서 매장 상세 데이터 불러오기
  return (
    <SafeAreaView
      style={{ alignItems: 'center', backgroundColor: 'white', flex: 1 }}
    >
      <View style={{ width: 261, marginTop: 40 }}>
        <Pressable
          style={{ position: 'absolute', zIndex: 1 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="ios-chevron-back" size={28} color="black" />
        </Pressable>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>{name}</Text>
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

export default Selected;
