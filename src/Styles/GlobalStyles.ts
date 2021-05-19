import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
       margin:0;
       padding:0;
       box-sizing:border-box; //organiza o tamanho das caixas (não deixa ocupar mais que o valor dela)
    }

    html, body, #root{
        height:100%;
    }

    *, button, input{
        border:0;
        outline:0;
        font-family: 'Fira Code', monospace;
    }   
    

`;