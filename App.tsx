import AppInner from './AppInner';
import { RecoilRoot } from 'recoil';
import ErrorBoundary from './src/components/common/ErrorBoundary';

const App = () => {
  return (
    <RecoilRoot>
      <ErrorBoundary fallback="error">
        <AppInner />
      </ErrorBoundary>
    </RecoilRoot>
  );
};

export default App;
