import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    img,
    svg {vertical-align:top;}
    body {
        background-color: #fafbfe;
    }
    body,
    h1, h2, h3, h4, h5, h6,
    ul, ol, dl, dd,
    p, fieldset, legend {
        margin: 0;
        padding: 0;
    }
    
    body, input, textarea, select, button {
        font-family: Dotum,'돋움',Helvetica,"Apple SD Gothic Neo",sans-serif;
    }
    
    ul, ol {
        list-style: none;
    }
    
    table {
        border-collapse: collapse;
    }
    
    em {
        font-style: normal
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
    
    fieldset {
        border: 0;
    }
    
    .blind {
        position:absolute;
        clip:rect(0 0 0 0);
        width:1px;height:1px;
        margin:-1px;
        overflow:hidden;
    }

    button {
        padding: 0;
        background-color: transparent;
        border: 0;
        border-radius: 0;
    }
`;

export default GlobalStyle;