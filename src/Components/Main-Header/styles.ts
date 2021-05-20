import styled from 'styled-components'

export const ContainerHeader = styled.div`
    grid-area:MH;
    background:${props => props.theme.colors.gray};
    color:${props => props.theme.colors.warning};

    color:#fff;
    border:#fff solid 2px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    padding:0 10px;

`;

export const Profile = styled.div`
    display:flex;
    flex-direction:row;
   
`;

export const Welcome = styled.h3`
    

`;

export const UserName = styled.span`
   

`;