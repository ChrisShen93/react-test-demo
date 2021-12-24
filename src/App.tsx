import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from '@arco-design/web-react';

const LifeCycle = lazy(() => import('./pages/life-cycle'));
const DropdownTest = lazy(() => import('./pages/arco-dropdown'));

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider
        focusLock={{ modal: false, drawer: false }}
      >
        <Suspense fallback={null}>
          <Routes>
            <Route
              path="/life-cycle"
              element={<LifeCycle />}
            />

            <Route
              path="/arco-dropdown"
              element={<DropdownTest />}
            />
          </Routes>
        </Suspense>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App
