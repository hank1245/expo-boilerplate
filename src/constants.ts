export const HOST = 'http://localhost:5500';

export const GRAPH_HEIGHT = 400;
export const GRAPH_WIDTH = 360;

export type DataPoint = {
  date: string;
  value: number;
};

export const originalData: DataPoint[] = [
  { date: '2000-02-01', value: 250 },
  { date: '2000-02-02', value: 300.35 },
  { date: '2000-02-03', value: 150.84 },
  { date: '2000-02-04', value: 500.92 },
  { date: '2000-02-05', value: 200.8 },
  { date: '2000-02-06', value: 150.47 },
  { date: '2000-02-07', value: 1000.47 },
  { date: '2000-02-08', value: 200.47 },
  { date: '2000-02-09', value: 1500.47 },
  { date: '2000-02-10', value: 83.8 },
  { date: '2000-02-11', value: 100.47 },
  { date: '2000-02-12', value: 1000.47 },
  { date: '2000-02-13', value: 200.47 },
  { date: '2000-02-14', value: 500.47 },
  { date: '2000-02-15', value: 600.47 },
];

export const animatedData: DataPoint[] = [
  { date: '2000-02-01', value: 500 },
  { date: '2000-02-02', value: 400.0 },
  { date: '2000-02-03', value: 300.0 },
  { date: '2000-02-04', value: 400.0 },
  { date: '2000-02-05', value: 500.0 },
  { date: '2000-02-06', value: 1000.98 },
  { date: '2000-02-07', value: 500.0 },
  { date: '2000-02-08', value: 200.0 },
  { date: '2000-02-09', value: 1300.75 },
  { date: '2000-02-10', value: 400.0 },
  { date: '2000-02-11', value: 500.0 },
  { date: '2000-02-12', value: 900.98 },
  { date: '2000-02-13', value: 600.0 },
  { date: '2000-02-14', value: 250.0 },
  { date: '2000-02-15', value: 330.67 },
];
