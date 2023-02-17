import styled from "styled-components"

export const ContainerBannerHome = styled.div`
    display: flex;
    background-color: #5126e6;
    justify-content: center;
    height: 400px;
    align-items: center;


    .containerBannerContent {
        width: 65%;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        color: #FFFFFF;
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
            border: 1.5px solid #FDFDFD;
            border-radius: 4px;
            height: 48px;
            background-color: transparent;
            color: #FFFFFF;
            cursor: pointer;
        }
    }

`
