import React,{useMemo} from 'react'

import { ContainerHeader, Profile, Welcome, UserName} from './styles'

import Toggle from '../Toggle'


import emojis from '../../utils/emogis'

const MainHeader: React.FC = () =>{
    

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random()* emojis.length)
        
        return emojis[indice];
    },[]);

    return(
        <ContainerHeader>

            <Toggle />
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>André</UserName>
            </Profile>
        </ContainerHeader>
    )
}

export default MainHeader