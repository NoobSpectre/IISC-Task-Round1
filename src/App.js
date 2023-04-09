import { useEffect } from 'react';
import { useAnswer } from './context/AnswerContext';
import { _getItem } from './store/store';
import Routes from './routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';

function App() {
  const { setAnswer1, setAnswer2 } = useAnswer();

  useEffect(() => {
    const a1 = _getItem('a1');
    const a2 = _getItem('a2');

    // on each mount answer1 and answer2 are set from localstorage
    setAnswer1(a1);
    setAnswer2(a2);
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
