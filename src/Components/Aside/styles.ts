import styled from 'styled-components'

export const ContainerAside = styled.div`
    grid-area: AS;

    background-color:${props => props.theme.colors.black};
    color:${props => props.theme.colors.white};
    border-right:#fff solid 2px;
    padding-left:20px;


`;


export const Header = styled.div`
    display:flex;
    align-items:center;
    height:70px;

`

export const Tittle = styled.h3`
    color:${props => props.theme.colors.white};
    margin-left:10px;

`;
export const LogImg = styled.img`
    height:40px;
    width:40px;

`
export const MenuContainer = styled.nav`
    margin-top:50px;
    display:flex;
    flex-direction:column;


`;
export const MenuItemLink = styled.a`
    color:${props => props.theme.colors.info};
    text-decoration:none;
    transition:opacity .3s;

    display:flex;
    align-items:center;

    margin:7px 0;

    &:hover{
        opacity: .7;
    }

    > svg{
        font-size: 18px;
        margin-right:5px;
        color:${props => props.theme.colors.primary};
    }
`

