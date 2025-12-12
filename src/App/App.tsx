import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';

import { StoreProvider } from 'store/StoreProvider';

import { router } from './routes';

export const ThemeContext = React.createContext({
  toggleTheme: () => {},
});

export const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((v) => !v);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ConfigProvider
        theme={{
          algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <StoreProvider>
          <RouterProvider router={router} />
        </StoreProvider>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export default App;
