import React from 'react'

import { ContainerToogle, ToggleLabel, ToggleSelector } from './styles'

const Toggle: React.FC = () =>(

    <ContainerToogle>
        <ToggleLabel>Light</ToggleLabel>

        <ToggleSelector 
        checked
        onChange={() => console.log('mudou')}
        uncheckedIcon={false}
        checkedIcon={false}
        />        
        
        <ToggleLabel>Dark</ToggleLabel>
        
    </ContainerToogle>
)
    


export default Toggle