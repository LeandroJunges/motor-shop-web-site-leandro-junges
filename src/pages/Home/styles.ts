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
    ul{
        width: 99%;
        height: 380px;
        margin-left: 10px;
        display: flex;
        gap: 10px;
        overflow-x: auto;
        overflow-y: hidden;
    }
    li{
        display: flex;
        min-width: 735px;
        height: 320px;
        justify-content: center;
        position: relative;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);

        img{
            z-index: -1;
            width: 100%;
            height: 100%;
        }
        .hour{
            position: absolute;
            top: 30px;
            left: 35px;
            background: #ffffff;
            padding: 4px;
            border-radius: 32px;
        }
        .hour > svg {
            color: #4529E6;
        }
        .titleAnnouncement{
            position: absolute;
            top: 108px;
            left: 36px;
            color: #ffffff;   
        }
        .description{
            position: absolute;
            top: 170px;
            left: 36px;
            color: #ffffff;
        }
        .containerInfos{
            position: absolute;
            left: 0;
            top: 280px;
            width: 240px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            span{
                color: #4529e6;
                background: #EDEAFD;
                border-radius: 4px;
                padding: 4px 8px;
            }
        }
        abbr{
            position: absolute;
            top: 210px;
            padding: 10px;
            background-color: #4529e6;
            border-radius: 32px;
            left: 30px;
            color: #ffffff;
            text-decoration: none;
            

        }
        .name{
            color: #ffffff;
            position: absolute;
            top: 221px;
            left: 80px;
        }
        .price{
            position: absolute;
            top: 300px;
            color: #fff;
            right: 30px;
        }
        .containerLink{

            position: absolute;
            top: 320px;
            background-color: #4529E6;
            width: 96%;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            overflow: hidden ;

            a{
                color: #ffffff;
                text-decoration: none;
                font-size: 16px;
            }
            svg{
                color: #fff;

            }

        }

    }

`

export const ContainerListCar = styled.div`
    ul{
        display: flex;
        gap: 15px;
        overflow-x: auto;
    }
`

export const ContainerListMotorcycle = styled.div`
    ul{
        display: flex;
        gap: 15px;
        overflow-x: auto;
    }

`