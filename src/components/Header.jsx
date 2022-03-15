import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import TopicContext from '../context/TopicContext';

const Header = () => {
  const { isDark } = useContext(ThemeContext);
  const { headerTitle } = useContext(TopicContext);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
      <h2>Welcom to {headerTitle}</h2>
    </header>
  );
};

export default Header;
