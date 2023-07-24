import styled from "styled-components";

export const StyledContainer = styled.div`
width: 100vw;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
box-sizing: border-box;
background-color: #000000;

& > div:nth-child(1){

    width: clamp(300px, 90vw, 370px);
    height: 97px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    
    img{
        width: 122px;
        height: 21px;
    }

    .link{
        background-color: var(--color-grey-3);
        height: 40px;
        width: 67px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        border-radius: 4px;
    }
}

`