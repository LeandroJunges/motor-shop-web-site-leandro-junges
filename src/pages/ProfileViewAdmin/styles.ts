import styled from "styled-components";



export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContainerBannerAdmin = styled.div`
  width: 100%;
  height: 300px;
  background-color: #4529e6;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 150px;

  .containerContentAdmin {
    width: 80%;
    height: 350px;
    
    position: absolute;
    background-color: #fdfdfd;
    top: 60px;
    
    z-index: 1;
    left: 35px;
    

    .content {
      margin: 50px auto;
      display: flex;
      flex-direction: column;
      align-items: baseline;

              abbr{
                width: 50px;
                height: 50px;
                border-radius: 50px ;
                
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50px;
                  }
                  
              }
            
            p{  display: flex;
                font-size: 20px;
                font-family: 'Lexend' ;
                font-weight: 600 ;
              }
            span{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 4px 8px;
                gap: 10px;
                color: #4529E6;
                background: #EDEAFD;
                border-radius: 4px;
                font-size: 14px;
                font-weight: 500;

              }

        }
        p{
            margin: 0 6px;
        }
        button{
            margin: 20px 50px;
            padding: 10px;
            border: solid 1px #4529E6;
            background-color: transparent;
            color: #4529E6;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
        }

        .buttonsProfileCard{
            width: 140px;
            display: flex;
            justify-content: space-between;

            button{
                
            }
        }
    }
    p {
      margin: 0 50px;
    }
    button {
      margin: 20px 50px;
      padding: 10px;
      border: solid 1px #4529e6;
      background-color: transparent;
      color: #4529e6;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
    }

    @media(min-width: 425px){
      .containerContentAdmin{
        left: 45px ;
      }
    }
    @media(min-width: 768px){
      .containerContentAdmin{
        left: 80px;
      }
    }

    @media(min-width: 1024px){
      .containerContentAdmin{
         height: 297px; 
         top: 100px; 
         left: 95px; 
      }
      .content{
        p{
            margin: 0 50px;
        }
      }
    }


  
`;
