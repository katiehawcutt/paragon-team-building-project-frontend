import { createGlobalStyle } from 'styled-components'

import Sen from './Sen.woff'
import Sen2 from './Sen.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Sen';
        src: local('Sen'), local('Sen'),
        url(${Sen2}) format('woff2'),
        url(${Sen}) format('woff');
        font-weight: 'light';
        font-style: 'normal';
    }
`
