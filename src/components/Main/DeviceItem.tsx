import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../pages/MainPage';
import { useNavigation } from '@react-navigation/native';

interface Props {
  name: string;
  status: string;
  type: string;
}

function DeviceItem({ name, status, type }: Props) {
  const [isPressed, setIsPressed] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const onPressIn = () => {
    setIsPressed(true);
  };
  const onPressOut = () => {
    setIsPressed(false);
    if (type === 'controller') {
      navigation.navigate('ControllerDetail');
    } else {
      navigation.navigate('SensorDetail');
    }
  };
  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
      <View style={isPressed ? styles.itemDark : styles.item}>
        <Text style={styles.bigText}>{name}</Text>
        <Text style={styles.status}>{status}</Text>
        <AntDesign
          name="right"
          size={20}
          color="black"
          style={{ position: 'absolute', right: 10, top: 18 }}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bigText: {
    fontWeight: '400',
    fontSize: 16,
  },
  item: {
    paddingVertical: 15,
  },
  itemDark: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingVertical: 15,
  },
  status: {
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.8)',
    marginTop: 3,
  },
});

export default DeviceItem;
