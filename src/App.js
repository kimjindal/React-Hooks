import { useState } from 'react';
import Page from './components/Page';
import ThemeContext from './context/ThemeContext';
import TopicContext from './context/TopicContext';

function App() {
  const [isDark, setIsDark] = useState(false);
  const headerTitle = 'React Hooks';
  const contentTitle = 'createContext';

  return (
    <TopicContext.Provider value={{ headerTitle, contentTitle }}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />;
      </ThemeContext.Provider>
    </TopicContext.Provider>
  );
}

export default App;
