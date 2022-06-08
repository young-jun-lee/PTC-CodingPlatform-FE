import { createGlobalStyle } from 'styled-components';

import Raleway from '../content/fonts/raleway.woff2';
// import NameOfYourFontWoff2 from './nameOfYourFont.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Raleway';
        src: local('Raleway'), local('FontName'),
        url(${Raleway}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;
