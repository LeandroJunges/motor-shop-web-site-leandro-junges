import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    var(--brand-1) 20.25%,
    var(--grey-8) 20.26%,
    var(--grey-8) 100%
  );
  gap: 16px;
  position: relative;
`

export const BottomDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Centered = styled.div`
  width: 90%;
  height: fit-content;
  gap: 52px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CarrAuction = styled.div`
  height: 370px;
  width: 100%;
  overflow-x: auto;
  gap: 12px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-weight: 600;
  font-family: "Lexend";
  font-size: 24px;
  line-height: 30px;
`;

export const Carrossel = styled.div`
  overflow-x: auto;
  gap: 12px;
  display: flex;
  height: fit-content;
  width: 100%;
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
export const OutCarroussel = styled.div`
  height: fit-content;
  width: 100%;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;


export const ContainerBannerHome = styled.div`
    display: flex;
    justify-content: center;
    height: 298px;
    align-items: center;
    width: 90%;

  .containerBannerContent {
    width: 70%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    color: var(--whiteFixed);
  }
  .contentText{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
        h2 {
            font-size: 24px;
            text-align: center;
        }
    
        span {
            font-size: 16px;
            font-family: "inter";
            text-align: center;
        }
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
