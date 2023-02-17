import  styled  from 'styled-components';

export const ContainerFooter = styled.footer`
    width: 100%;
    height: 100px;
    padding: 10px;
    gap: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: #0B0D0D;

    img{
    width: 153px;
    height: 26.34px;
    }

    span{
    color: #ffffff;
    font-family: "Inter";
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    }

    button{
        width: 53px;
        height: 50px;
        margin-right: 15px;
        
        color: #ffffff;
        background-color: #212529;
    
        border: none;
        border-radius: 4px;
    }

    @media (min-width: 768px){

        flex-direction: row;
        justify-content: space-around;
       
        button{
            margin-right: 30px;
        }

    }
    @media (min-width: 1024px){

        flex-direction: row;
        justify-content: space-between;
    }


`