import styled from "styled-components";

export const StyledContainerTechnogies = styled.div`
width: 100%;
height: 469px;

div:nth-child(1) {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;

    button{
        width: 32px;
        height: 32px;
        color: white;
        font-size: 23px;
        background-color: var(--color-grey-3);
        border-radius: 4px;
        :hover{
            background-color: var(--color-grey-2);
        }
    }
}
`