import styled from "styled-components"

export const ContainerBannerHome = styled.div`
    display: flex;
    background-color: var(--brand-2);
    justify-content: center;
    height: 400px;
    align-items: center;
    min-width: 100%;


    .containerBannerContent {
        width: 65%;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        color: var(--whiteFixed);
    }

    h2{
        font-size: 44px;
        text-align: center;
    }

    span{
        font-size: 16px;
        font-family: 'inter';
    }
    
    .containerButton{
        width: 50%;
        display: flex;
        justify-content: space-evenly;

        button{
            width: 150px;
            border: 1.5px solid var(--grey-10);
            border-radius: 4px;
            height: 48px;
            background-color: transparent;
            color: var(--whiteFixed);
            cursor: pointer;
        }
    }

`

export const ContainerAuction = styled.div`

    h4{
        font-size: 20px;
        font-weight: 600;
        font-family: "Inter", sans-serif;
        margin-left: 10px;
    }
    .carousel{
        width: 100%;
        height: 320px;
        margin-left: 10px;
        display: flex;
        gap: 15px;
        overflow: hidden;
        cursor: grab;
    }
    li{
        display: flex;
        min-width: 500px;
        height: 320px;
        justify-content: center;

    }

`

export const ContainerListCar = styled.div`
    ul{
        display: flex;
        overflow-x: auto;
    }
    li{
        margin: 10px 18px;
    }
    h4{
        font-size: 20px;
        font-weight: 600;
        font-family: "Inter", sans-serif;
        margin-left: 10px;
    }
`

export const ContainerListMotorcycle = styled.div`
    ul{
        display: flex;
        overflow-x: auto;
    }
    li{
        margin: 10px 18px;
    }
    h4{
        font-size: 20px;
        font-weight: 600;
        font-family: "Inter", sans-serif;
        margin-left: 10px;
    }

`