import styled from "styled-components";

export const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 72px;

img{
    width: 105px;
    height: 15px;
}

button{
    background-color: var(--color-grey-3);
    color: white;
    width: 55px;
    height: 32px;
    border-radius: 4px;
    :hover{
        background-color: var(--color-grey-2);
    }
}

`