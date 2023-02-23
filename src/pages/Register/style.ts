import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--grey-8);
    padding: 4rem 0px;
    .info {
        display: flex;
        gap: 10px;
        width: 100%;
        input {
            width: 80%;
        }
    }
`