import React from 'react'
import { 
    ContainerContentHeader,
    TitleContainer,
    Controllers
 } from './styles'

const ContentHeader: React.FC = () =>{
    return(
        <ContainerContentHeader>
            <TitleContainer>
                <h1>Titulo</h1>
            </TitleContainer>

            <Controllers>
                <button type='button'>Botão a</button>
                <button type='button'>Botão b</button>

            </Controllers>
        </ContainerContentHeader>
    )
}

export default ContentHeader