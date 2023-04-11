import { useNavigation } from '@react-navigation/native';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { HOST } from '../../constants';
import { AntDesign } from '@expo/vector-icons';
import BackgroundModal from '../common/BackgroundModal';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../pages/MainPage';
import DeviceItem from './DeviceItem';

const Selected = ({ route }: any) => {
  const { name, id } = route.params;
  const [info, setInfo] = useState<any>();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  useEffect(() => {
    async function getStore() {
      const { data } = await axios.get(`${HOST}/stores?id=${id}`);
      setInfo(data[0]);
    }
    getStore();
  }, [id]);

  return (
    <SafeAreaView
      style={{ alignItems: 'center', backgroundColor: 'white', flex: 1 }}
    >
      {info && (
        <>
          <View style={{ width: 261, marginVertical: 40 }}>
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
          <View style={styles.border}>
            <View style={styles.spaceBetween}>
              <Text style={styles.bigText}>모드 설정</Text>
              <Pressable onPress={() => setModalVisible(true)}>
                <Text style={styles.gray}>{info.mode}</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.border}>
            <View style={styles.spaceBetween}>
              <Text style={styles.bigText}>AC 목록</Text>
            </View>
            {info.controllers.map((d: any, idx: number) => (
              <DeviceItem
                name={d.name}
                status={d.status}
                key={idx}
                type="controller"
              />
            ))}
          </View>
          <View style={styles.border}>
            <View style={styles.spaceBetween}>
              <Text style={styles.bigText}>센서 목록</Text>
            </View>
            {info.sensors.map((d: any, idx: number) => (
              <DeviceItem
                name={d.name}
                status={d.status}
                key={idx}
                type="sensor"
              />
            ))}
          </View>
          <BackgroundModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            data={['스마트', '일반', 'OFF']}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  border: {
    marginBottom: 40,
    width: '80%',
  },
  gray: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  spaceBetween: {
    borderBottomColor: 'rgba(0,0,0,0.3)',
    borderBottomWidth: 1,
    paddingBottom: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bigText: {
    fontWeight: '400',
    fontSize: 16,
  },
  item: {
    paddingVertical: 13,
    backgroundColor: 'red',
  },
  itemDark: {},
  status: {
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.8)',
    marginTop: 3,
  },
});

export default Selected;
