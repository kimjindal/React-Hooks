import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import TopicContext from '../context/TopicContext';

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  const { contentTitle } = useContext(TopicContext);

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >
      <h5>Today is practice on {contentTitle} Hook</h5>
    </div>
  );
};

export default Content;
