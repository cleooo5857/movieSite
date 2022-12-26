import { ThemeProvider } from 'styled-components';
import Axios from './apis/@core';
import LayoutHeader from './components/Layout/header/Header';
import HomePage from './pages/Home';
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';

function App() {
    Axios.get('/movie/popular', {
        params: {
            language: 'ko-KO',
            page: 2,
        },
    }).then((res) => {
        console.log(res);
    });
    // movie/popular?laungage=ko-KO&page=2

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LayoutHeader />
            <HomePage />
        </ThemeProvider>
    );
}

export default App;
