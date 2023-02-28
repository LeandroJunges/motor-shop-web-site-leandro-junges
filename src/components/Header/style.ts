import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    display: flex;
    background: var(--grey-10);
    box-sizing: border-box;
    border-bottom: 2px solid var(--grey-6);
    align-items: center;
    justify-content: space-between;
    padding:  0px 20px;    
    height: 4rem;
    
`
export const FigureStyle = styled.figure`
display: flex;
cursor: pointer;
`
export const NavStyle = styled.nav`
    height: 100%;
    display: flex;
    .itens {
        display: none;
    }
    .session {
        display: none;
    }
    @media (min-width: 665px) {
        display: flex;
        gap: 20px;
        .itens {
            border-right: 2px solid var(--grey-6);
            display: flex;
        }
        .session {
            display: flex;
        }
        section{
            height: 100%;
            display: flex;
            align-items: center;
            padding-right: 20px;
            gap: 10px;
            ul{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 10px;
                a{
                    text-decoration: none;
                    color: var(--grey-2);
                    font-weight: 600;
                    font-family: 'Inter';
                }
            }
        }
        .button-icon{
            display: none;
        }
        .login{
            color:var(--brand-1);
        }
    }
`
export const DivAvatar = styled.div`
background: var(--brand-1);
width: 32px;
height: 32px;
border-radius: 150px;
display: flex;
justify-content: center;
align-items: center;
    img {
        width: 100%;
        height: 100%;
    }
`