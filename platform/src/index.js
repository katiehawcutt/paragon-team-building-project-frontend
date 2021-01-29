import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from '../src/components/App'

import { ChakraProvider } from '@chakra-ui/react'

import { UserContextProvider } from './contexts/User'

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <UserContextProvider>
                <App />
            </UserContextProvider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
