import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import {
  Canvas,
  Circle,
  Path,
  Skia,
  useValue,
} from '@shopify/react-native-skia';
import { useSharedValue } from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

function Controller() {
  const strokeWidth = 20;
  const center = width / 2;
  const r = (width - strokeWidth) / 2 - 40;
  const startAngle = Math.PI;
  const endAngle = Math.PI * 2;
  const x1 = center - r * Math.cos(startAngle);
  const y1 = -r * Math.sin(startAngle) + center;
  const x2 = center - r * Math.cos(endAngle);
  const y2 = -r * Math.sin(endAngle) + center;
  const backgroundPath = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`;
  const skiaBackgroundPath = Skia.Path.MakeFromSVGString(backgroundPath);

  const movableCx = useSharedValue(x2);
  const movableCy = useSharedValue(y2);
  const previousCx = useSharedValue(x2);
  const previousCy = useSharedValue(y2);
  const skiaCx = useValue(x2);
  const skiaCy = useValue(y2);

  const gesture = Gesture.Pan().onUpdate(({ translationX, translationY }) => {
    movableCx.value = translationX + previousCx.value;
    movableCy.value = translationY + previousCy.value;
  });

  if (!skiaBackgroundPath) {
    return (
      <View>
        <Text>컨트롤러</Text>
      </View>
    );
  }
  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={gesture}>
        <View style={styles.container}>
          <Canvas style={styles.canvas}>
            <Path
              path={skiaBackgroundPath}
              strokeWidth={strokeWidth}
              strokeCap="round"
              color="grey"
              style="stroke"
            />
            <Circle r={20} cx={skiaCx} cy={skiaCy} color="black" />
          </Canvas>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvas: {
    flex: 1,
    marginTop: 100,
  },
});

export default Controller;
