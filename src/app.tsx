import React, { Children } from 'react'
import GlobalStyles from './Styles/GlobalStyles'

import {ThemeProvider} from 'styled-components'

import Layout from './Components/Layout'
import dark from './Styles/themes/dark'
import Dashboard from './pages/Dashboard'


const App: React.FC = () =>{
    return(
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout>
                <Dashboard />
            </Layout>
        </ThemeProvider>
    )
}

export default App