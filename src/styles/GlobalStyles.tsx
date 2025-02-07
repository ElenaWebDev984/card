import {createGlobalStyle} from 'styled-components';
import {myTheme} from './Theme.styled.tsx';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 320px;
        min-height: 100vh;
        background-color: ${myTheme.colors.body};
    }
`