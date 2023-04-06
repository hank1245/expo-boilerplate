import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

const MainPage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '1층', value: '1' },
    { label: '2층', value: '2' },
  ]);

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <View style={{ width: 261, marginTop: 40 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>공간 조회</Text>
        </View>
      </View>
      <View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="카테고리"
          style={{
            width: 150,
            height: 40,
            marginTop: 30,
            marginLeft: '50%',
          }}
          dropDownContainerStyle={{
            width: 103,
            height: 80,
            marginTop: 30,
            marginLeft: '50%',
          }}
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

export default MainPage;
