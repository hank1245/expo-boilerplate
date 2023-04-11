import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../common/Button';
import BackgroundModal from '../common/BackgroundModal';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../pages/MainPage';

const ControllerDetail = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const onPressMode = () => {
    setData(['냉방', '난방', '송풍']);
    setModalVisible(true);
  };
  const onPressTemp = () => {
    navigation.navigate('Temperature');
  };
  const onPressWind = () => {
    setData(['강', '중', '약']);
    setModalVisible(true);
  };

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
          <View
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              width: 50,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}
          >
            <Pressable>
              <Text style={{ color: 'gray', fontSize: 14 }}>ON</Text>
            </Pressable>
          </View>
        </View>
        <Pressable onPress={onPressMode}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 16,
            }}
          >
            <Text style={{ fontSize: 16 }}>모드 설정</Text>
            <Text style={{ color: 'rgba(0, 0, 0, 0.5)' }}>냉방</Text>
          </View>
        </Pressable>
        <Pressable onPress={onPressTemp}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 24,
            }}
          >
            <Text style={{ fontSize: 16 }}>온도 설정</Text>
            <Text style={{ color: 'rgba(0, 0, 0, 0.5)' }}>18ºC</Text>
          </View>
        </Pressable>
        <Pressable onPress={onPressWind}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 16,
            }}
          >
            <Text style={{ fontSize: 16 }}>바람세기 설정</Text>
            <Text style={{ color: 'rgba(0, 0, 0, 0.5)' }}>강</Text>
          </View>
        </Pressable>
        <Button
          onPress={() => navigation.goBack()}
          text="완료"
          style={{ width: '100%', position: 'absolute', bottom: 30 }}
        />
      </View>
      <BackgroundModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={data}
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

export default ControllerDetail;
