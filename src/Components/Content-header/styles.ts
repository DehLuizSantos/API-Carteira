
import styled from 'styled-components'

export const ContainerContentHeader = styled.div`
    width:100%;

    margin-bottom:30px;

    display:flex;
    justify-content:space-between;
    align-items:center;

   
`;

export const TitleContainer = styled.div` 
    > h1{
        color:${props => props.theme.colors.white};

        &::after{
            content: '';
            display:block;
            border-bottom: 10px solid ${props => props.theme.colors.primary};

        }
    }
    

`;


export const Controllers = styled.div` 
    
`;