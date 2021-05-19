import React from 'react'
import Content from '../Content'
import MainHeader from '../Main-Header'
import Aside from '../Aside'

import {GridLayout} from './styles'

const Layout: React.FC = () =>{
    return(
        <GridLayout>            
            <MainHeader />     
            <Aside />       
            <Content />
        </GridLayout>
    )

}

export default Layout