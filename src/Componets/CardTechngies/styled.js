import styled from "styled-components";

export const StyledCard = styled.li`
width: 100%;
height: 49px;
background-color: #121214;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
border-radius: 4px;
cursor: pointer;

:hover{
    background-color: var(--color-grey-2);
}
`