import styled from "styled-components";

export const StyledList = styled.ul`
width: 100%;
height: 100%;
background-color: var(--color-grey-3);
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
overflow-y: auto;
::-webkit-scrollbar {
            width: 5px;
}
::-webkit-scrollbar-track {
     background: white; 
}

::-webkit-scrollbar-thumb {
background: black;
border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
background: black; 
}


`   