import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from '../src/components/App/App'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
    <ChakraProvider>
        <App />
    </ChakraProvider>,
    document.getElementById('root')
)
