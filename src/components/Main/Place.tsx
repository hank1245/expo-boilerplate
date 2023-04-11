import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { MainStackParamList } from '../../pages/MainPage';

interface Props {
  item: any;
}

function Place({ item }: Props) {
  const [isPressed, setIsPressed] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList, 'Selected'>>();

  const onPressIn = () => {
    setIsPressed(true);
  };
  const onPressOut = () => {
    setIsPressed(false);
    navigation.navigate('Selected', {
      id: item.id,
      name: item.title,
    } as any);
  };
  return (
    <View style={{ marginTop: 30 }}>
      <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
        <View style={isPressed ? styles.itemDark : styles.item}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={{ color: 'rgba(0,0,0,0.6)' }}>
            {item.temp} ・ {item.mode}
          </Text>
          <AntDesign
            name="right"
            size={24}
            color="black"
            style={{ position: 'absolute', right: 10, top: 24 }}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    padding: 15,
  },
  itemDark: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 15,
  },
  itemTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default Place;
