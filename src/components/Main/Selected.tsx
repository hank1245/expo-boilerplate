import { useNavigation } from '@react-navigation/native';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { HOST } from '../../constants';
import { AntDesign } from '@expo/vector-icons';
import BackgroundModal from '../common/BackgroundModal';

const Selected = ({ route }: any) => {
  const navigation = useNavigation();
  const { name, id } = route.params;
  const [info, setInfo] = useState<any>();
  const [modalVisible, setModalVisible] = useState(false);

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
              <View style={styles.item} key={idx}>
                <Text style={styles.bigText}>{d.name}</Text>
                <Text style={styles.status}>{d.status}</Text>
                <AntDesign
                  name="right"
                  size={20}
                  color="black"
                  style={{ position: 'absolute', right: 10, top: 5 }}
                />
              </View>
            ))}
          </View>
          <View style={styles.border}>
            <View style={styles.spaceBetween}>
              <Text style={styles.bigText}>센서 목록</Text>
            </View>
            {info.sensors.map((d: any, idx: number) => (
              <View style={styles.item} key={idx}>
                <Text style={styles.bigText}>{d.name}</Text>
                <Text style={styles.status}>{d.status}</Text>
                <AntDesign
                  name="right"
                  size={20}
                  color="black"
                  style={{ position: 'absolute', right: 10, top: 5 }}
                />
              </View>
            ))}
          </View>
          <BackgroundModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
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
    marginTop: 13,
  },
  status: {
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.8)',
    marginTop: 3,
  },
});

export default Selected;
