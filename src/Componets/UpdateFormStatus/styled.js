import styled from "styled-components";

export const StyledConteinerUpdate = styled.div`
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

    h3{
        font-family: 700;
        font-size: 0.875rem;
    }
    

    button{
        width: 20px;
        height: 20px;
        color: white;
    }
    
}


.StyledButton{
    background-color: var(--color-grey-1);
    width: 98px;
    height: 48px;
    
}

.StyledButton:hover{
    background-color: var(--color-grey-2);
}
`

export const StyledFormUpdate = styled.form`
  display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 5px;
    color: white;

    div{
        height: 100px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        label{
            font-size: 0.75rem
        }

        p{
            color: red;
            font-size: 0.75rem;
        }
    }


    input{
        width: 100%;
        height: 48px;
        background-color: var(--color-grey-2);
        color: white;
        padding: 15px;
        outline: none;
        border: none;
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
        width: 60%;
        height: 48px;
        background-color: var(--color-color-primary-disable);
        color: white;
        
        :hover{
            background-color: var(--color-grey-1);
        }
    }

    .ContainerButton{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

`