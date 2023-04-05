import { configureStore } from '@reduxjs/toolkit';
import AppInner from './AppInner';
import { Provider } from 'react-redux';
import authReducer from './src/slices/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

const App = () => {
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
};

export default App;
