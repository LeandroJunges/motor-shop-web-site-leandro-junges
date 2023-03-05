import styled from "styled-components";

export const Container = styled.nav`
width: 100%;
background: var(--grey-10);
position: absolute;
top: 50px;
right: 0;
margin-top: 20px;
display: flex;
flex-direction: column;
padding: 5px;
box-sizing: border-box;
z-index: 10;


    a{
        text-decoration: none;
        color: var(--grey-2);
        font-weight: 600;
        font-family: 'Inter';
    }
    .nav-itens {
        ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 44px;
            padding-left: 10px;
            padding-bottom: 44px;
            border-bottom: 1px solid var(--grey-4);
            
        }
        
    }
    .nav-session {
        display: flex;
        align-items: center;
        padding: 20px 0;
        border-bottom: 1px solid var(--grey-4);
    }
`
export const UlStyle = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    
`