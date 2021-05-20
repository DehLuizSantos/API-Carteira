import React from 'react'
import { ContainerContent } from './styles'

const Content: React.FC = ({children}) =>{
    return(
        <ContainerContent>
            {children}
        </ContainerContent>
    )
}

export default Content