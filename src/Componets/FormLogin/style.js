import styled from "styled-components";

export const StyledFormLogin = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
width: 369px;
height: 502px;
background-color: var(--color-grey-3);
color: white;
padding: 20px;

@media (max-width: 370px) {
    width:250px ;
}

span{
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--color-grey-1);
}

p{
    color: red;
    font-size: 0.75rem;
}

label{
    color: var(lor-grey-0);
    font-size: 0.75rem;
}
div{
    
    height: 105px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;

}

input{
    background-color: var(--color-grey-2);
    width: 100%;
    height: 48px;
    padding: 20px;
    color: white;
    border-radius: 4px;
    
    
    &:focus {
    outline: none;
    box-shadow: none;
    
    
  }
}

.buttonEntrar{
    background-color: var(--color-color-primary);
    color: white;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    font-size: 1rem;

}

.buttonEntrar:hover{
    background-color: var(--color-negative);
}

.olhinho{
    
    position: absolute;
    right: 10px;
    top: 36px;
    width: 16px;
    height: 22px;
    cursor: pointer;
   
}

.olhinho svg {
  width: 100%;
  height: 100%;
  color: white;
}

.link{
    width: 100%;
    height: 48px;
    background-color: var(--color-grey-1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-size: 1rem;
    
    :hover{
    background-color: var(--color-grey-2);
    }
}






`

