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
`
export const NavStyle = styled.nav`
    height: 100%;
    display: flex;
    section {
        display: none;
    }
    @media (min-width: 665px) {
        display: flex;
        gap: 20px;
        .itens {
            border-right: 2px solid var(--grey-6);
        }
        section{
            height: 100%;
            display: flex;
            align-items: center;
            padding-right: 20px;
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