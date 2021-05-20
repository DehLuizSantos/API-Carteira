import React from 'react'
import { 
    ContainerAside,
    Header,    
    LogImg,
    MenuContainer,
    MenuItemLink,
    Tittle,
} from './styles'

import  {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md'

import logoImg from '../../assets/logo.svg'

const Aside: React.FC = () =>{
    return(
        <ContainerAside>
            <Header>
                <LogImg src={logoImg} alt='logo minha carteira' />
                <Tittle>Minha Carteira</Tittle>
            </Header>

            <MenuContainer>
                <MenuItemLink href='#'> 
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href='#'> 
                <MdArrowUpward />
                    Entradas
                </MenuItemLink>

                <MenuItemLink href='#'> 
                <MdArrowDownward />
                    Saídas
                </MenuItemLink>

                <MenuItemLink href='#'> 
                <MdExitToApp />
                    Menu
                </MenuItemLink>
            </MenuContainer>
        </ContainerAside>
    )
}

export default Aside