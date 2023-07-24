import styled from "styled-components";

export const StyledContainer = styled.div`
background-color: #121214;
width: 100%;
height: 100vh;
color: white;

.container{
    color: white;
     max-width: 780px;
    margin: 0 auto;
    width: 100%;
    width: 100%;
    height: 118px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
   
    h2{
        font-weight: 700;
        font-size: 1.125rem;
    }
    P{
        color: var(--color-grey-1);
    }



    @media (max-width: 720px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 20px;
    h2{
        margin-top: 20px;
    }
    
    
}
}

.TopContainer{
   border-top: 1px solid var(--color-grey-3);
    border-bottom: 1px solid var(--color-grey-3); 

}
.ContainerAviso{
    width: 100%;
    background-color:#000000;
    display: flex;
    margin-top: 37px;
    flex-direction: column;
    gap: 23px;
    margin-top: 20px;

    h2{
        font-weight: 700;
        font-size: 1.125rem;
    }
    h3{
        font-size: 1rem;
        
    }
}

`   