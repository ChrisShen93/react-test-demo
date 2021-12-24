import { useEffect, useLayoutEffect, useMemo, useState } from 'react'

const LifeCycle = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('effect, blank deps', count);
    return () => {
      console.log('effect return, blank deps', count);
    }
  });

  useEffect(() => {
    console.log('effect, empty deps', count);
    return () => {
      console.log('effect return, empty deps', count);
    }
  }, []);

  useLayoutEffect(() => {
    console.log('layout effect, blank deps', count);
    return () => {
      console.log('layout effect return, blank deps', count);
    }
  });

  useLayoutEffect(() => {
    console.log('layout effect, empty deps', count);
    return () => {
      console.log('layout effect return, empty deps', count);
    }
  }, []);

  return useMemo(() => {
    setCount(1);
    console.log('render memo', count);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <button type="button" onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    );
  }, [count])
}

export default LifeCycle;
