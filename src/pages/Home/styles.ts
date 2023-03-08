import styled from "styled-components";


export const ContainerHomeGenneral = styled.div`
    width: 100%;
    height: 100vw;
    position: relative;
`

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

  h2 {
    font-size: 24px;
    text-align: center;
  }

  span {
    font-size: 16px;
    font-family: "inter";
  }

  .containerButton {
    width: 80%;
    display: flex;
    justify-content: space-evenly;

        a{
            width: 60px;
            border: 1.5px solid var(--grey-10);
            border-radius: 4px;
            height: 48px;
            background-color: transparent;
            color: var(--whiteFixed);
            text-decoration: none;
            cursor: pointer;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media (min-width: 768px ){
        h2{
            font-size: 44px;
        }

        .containerButton{
            width: 60%;

            a{
                width: 120px;
            }
        }
    }


`

export const ContainerAuction = styled.div`
  h4 {
    font-size: 20px;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    margin-left: 10px;
  }
  .carousel {
    width: 96%;
    height: 340px;
    margin-left: 10px;
    display: flex;
    gap: 15px;
    overflow: auto;
    cursor: pointer;
  }
  li {
    display: flex;
    min-width: 300px;
    height: 293px;
    justify-content: center;

    .carousel{
        width: 96%;
        height: 320px;
        margin-left: 10px;
        display: flex;
        gap: 15px;
        overflow: auto;
        cursor: pointer;
    }
    li{
        display: flex;
        min-width: 300px;
        height: 293px;
        justify-content: center;

        img{
            width: 90%;
        }

    }
    
  }

    @media (min-width: 768px){
        .carousel{
            width: 100%;
            /* overflow: hidden; */
        }

    li {
      min-width: 500px;
      height: 320px;
      img {
        width: 100%;
      }
    }
  }

  .listEmpty {
        width: 100%;
        display: flex;
        justify-content: center;
        
        h1{
            font-size: 24px;
            font-weight: 400;
            padding: 20px;
        }

    }

`;

export const ContainerListCar = styled.div`
    ul{
        display: flex;
        overflow-x: auto;
    }
    li{
        margin: 10px 18px;
    }
    
    .listEmpty {
        width: 100%;
        display: flex;
        justify-content: center;

        h1{
            font-size: 24px;
            font-weight: 400;
            padding: 20px;
        }
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
   
    .listEmpty {
        width: 100%;
        display: flex;
        justify-content: center;
        
        h1{
            font-size: 24px;
            font-weight: 400;
            padding: 20px;
        }

    }

`

export const Title = styled.h4`
    font-weight: 600;
    font-family: "Lexend";
    font-size: 24px;
    line-height: 30px;
    margin: 10px;
    
`

