import styled from "styled-components";

export const StyledContainerAddTech  = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
color: white;


& > div:nth-child(1){
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-2);
    padding-left: 10px;
    padding-right: 10px;
    

    button{
        width: 20px;
        height: 20px;
        color: white;
    }

    h3{
        font-size:0.875rem;
        font-weight: 700;
    }
    
}

`

export const StyledFormTech = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    color: white;

    div{
        height: 100px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;

        p{
            color: red;
            font-size: 0.75rem;
        }

        label{
            font-size: 12px;
        }
    }


    input{
        width: 100%;
        height: 48px;
        background-color: var(--color-grey-2);
        color: white;
        padding: 15px;
        outline: none;

    
    }
    

    select{
        width: 100%;
        height: 48px;
        background-color: var(--color-grey-2);
        color: white;
        padding: 15px;
        outline: none;
        border: none;
    }

    button{
        width: 100%;
        height: 48px;
        background-color: var(--color-color-primary);
        color: white;

        :hover{
            background-color: var(--color-negative);
        }
    }

`