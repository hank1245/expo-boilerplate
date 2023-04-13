import React from 'react';

import {
  Canvas,
  Line,
  Path,
  Skia,
  SkPath,
  useComputedValue,
  vec,
} from '@shopify/react-native-skia';

import { originalData } from '../../constants';
import { curveBasis, line, scaleLinear, scaleTime } from 'd3';
import { View, StyleSheet } from 'react-native';
import { GRAPH_HEIGHT, GRAPH_WIDTH } from '../../constants';

interface GraphData {
  min: number;
  max: number;
  curve: SkPath;
}
export type DataPoint = {
  date: string;
  value: number;
};

const App = () => {
  const makeGraph = (data: DataPoint[]): GraphData => {
    const max = Math.max(...data.map(val => val.value));
    const min = Math.min(...data.map(val => val.value));
    const y = scaleLinear().domain([0, max]).range([GRAPH_HEIGHT, 35]);

    const x = scaleTime()
      .domain([new Date(2000, 1, 1), new Date(2000, 1, 15)])
      .range([10, GRAPH_WIDTH - 10]);

    const curvedLine = line<DataPoint>()
      .x(d => x(new Date(d.date)))
      .y(d => y(d.value))
      .curve(curveBasis)(data);

    const skPath = Skia.Path.MakeFromSVGString(curvedLine!);

    return {
      max,
      min,
      curve: skPath!,
    };
  };

  const graphData = makeGraph(originalData);

  const path = useComputedValue(() => {
    const start = graphData.curve;
    const end = graphData.curve;
    const result = start.interpolate(end, 1);
    return result?.toSVGString() ?? '0';
  }, []);

  return (
    <View style={styles.container}>
      <Canvas
        style={{
          width: GRAPH_WIDTH,
          height: GRAPH_HEIGHT,
          marginTop: 100,
        }}
      >
        <Line
          p1={vec(10, 130)}
          p2={vec(400, 130)}
          color="lightgrey"
          style="stroke"
          strokeWidth={1}
        />
        <Line
          p1={vec(10, 250)}
          p2={vec(400, 250)}
          color="lightgrey"
          style="stroke"
          strokeWidth={1}
        />
        <Line
          p1={vec(10, 370)}
          p2={vec(400, 370)}
          color="lightgrey"
          style="stroke"
          strokeWidth={1}
        />
        <Path style="stroke" path={path} strokeWidth={4} color="#6231ff" />
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonStyle: {
    marginRight: 20,
    backgroundColor: '#6231ff',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
});

export default App;
