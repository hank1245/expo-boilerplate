import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import DropDownPicker from 'react-native-dropdown-picker';
import { useEffect, useState } from 'react';
import Place from '../../components/Main/Place';
import { HOST } from '../../constants';
import axios from 'axios';

const SearchPlace = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<any>(null);
  const [items, setItems] = useState([
    { label: '1층', value: '1' },
    { label: '2층', value: '2' },
    { label: '3층', value: '3' },
  ]);
  const [list, setList] = useState<any>(null);

  useEffect(() => {
    async function getFloors() {
      const { data } = await axios.get(`${HOST}/floors`);
      if (value === '1') {
        setList(data[0].items);
      }
      if (value === '2') {
        setList(data[1].items);
      }
      if (value === '3') {
        setList(data[2].items);
      }
    }
    getFloors();
  }, [value]);

  return (
    <SafeAreaView
      style={{ alignItems: 'center', backgroundColor: 'white', flex: 1 }}
    >
      <View style={{ width: 261, marginTop: 40 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>공간 조회</Text>
        </View>
      </View>
      <View style={{ zIndex: 10 }}>
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
            height: 120,
            marginTop: 30,
            marginLeft: '50%',
          }}
        />
      </View>
      <View style={{ width: '80%', marginTop: 20 }}>
        {list &&
          list.map((item: any, idx: number) => {
            return <Place key={idx} item={item} />;
          })}
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

export default SearchPlace;
