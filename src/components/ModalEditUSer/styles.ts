import  styled  from 'styled-components';

export const ContainerGeneral = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  position: absolute;
  top:0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
 
`;

export const ContainerModal = styled.div`
  width: 90%;
  max-width: 520px;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--whiteFixed);
  border-radius: 8px;
  margin-top: 70px;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 6px;
    gap: 3px;
    border-radius: 4px;
    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        margin-left: 25px;
    }
    label {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: start;
        margin-left: 11px;
        color: var(--grey-1);

        @media(min-width: 375px){
          label{
            margin-left: 15px;
          }
        }
        
    }
    input {
      margin: 0 auto;
      width: 90%;
      height: 35px;
      border-radius: 4px;
      border: 1.5px solid var(--grey-7);
    }
    textarea{
      margin: 0 auto;
      width: 90%;
      border-radius: 4px;
      border: 1.5px solid var(--grey-7);
    }
    .containerButtons{
        width: 100%;
        display: flex;
        justify-content: flex-end;

        button {
            width: 40%;
            height: 48px;
            cursor: pointer;
            border-radius: 4px;
            margin-right: 15px;
        }
        .cancel{
            background: #DEE2E6;
            border: 1.5px solid #DEE2E6;
            border-radius: 4px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            color: var(--grey-2);
            width: 30%;
        }
        .save{
            background-color: var(--brand-1);
            border: 1.5px solid var(--brand-1);
            border-radius: 4px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            color: var(--whiteFixed) ;
        }
    }
    @media(min-width: 375px){
          label{
            margin-left: 15px;
          }
        }
    @media(min-width: 425px){
          label{
            margin-left: 20px;
          }
        }
    @media(min-width: 768px){
          label{
            margin-left: 25px;
          }
     }
  }

  @media (min-width: 769px){
    form{
      gap: 4px;
    }
  }
  @media(min-width: 1200px){
    form{
      gap: 8px;
    }
  }

`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px 4px 0px 0px;
  h4 {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-left: 25px;
    color: var(--gray-1);
  }
  button {
    background-color: transparent;
    border: none;
    color: #868e96;
    margin-right: 6px;
    cursor: pointer;
  }
`;



export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 15px;

  .contentSmall{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 10px;
    width: 50%;

    .label{
      margin: 0;
     
    }

    #cState{
      width: 100%;
    }
    #cCity{
      width: 97%;
    }
    #cNumber{
      width: 100%;
    }
    #cComplement{
      width: 97%;
    }
    
  }
  

  @media(min-width: 375px ){
    .contentSmall{
      
      margin: 15px;

    }
  }
  @media(min-width:425px){
    .contentSmall{
      
      margin: 0 17px;

    }
  }
  @media(min-width: 768px){
    .contentSmall{

      margin: 0 23px;

    }
  }
  
  
  
`