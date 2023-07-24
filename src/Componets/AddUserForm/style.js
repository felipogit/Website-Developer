import styled from "styled-components";

export const StyledForm = styled.form`
width: 370px;
height: 891px;
display: flex;
flex-direction: column;

@media (max-width: 370px) {
    width:295px ;
    
}

span{
  color: var(--color-grey-1);
  font-weight: 400;
  font-size: 0.75rem;
}

label{
  color: var(--color-grey-0);
  font-size: 0.75rem;
}

p{
  color: red;
  font-size: 0.75rem;
}

background-color: var(--color-grey-3);
gap:10px ;
padding: 20px;
color: white;

div{
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 4px
}

input{
    height: 48px;
    width: 100%;
    color: white;
    padding: 20px;
    background-color: var(--color-grey-2);
    
    border-radius: 4px;
    
    &::placeholder{
        background-color: var(--color-grey-2);
        
    }

    &:focus {
    outline: none;
    box-shadow: none;
    
  }
}

select{
    height: 48px;
    width: 100%;
    background-color: var(--color-grey-2);
    color: white;
    border-radius: 4px;
    color:var(--color-grey-1) ;
  }

  button{
    background-color: var(--color-color-primary-disable);
    height: 48px;
    width: 100%;
    border-radius: 4px;
    color: white;
    :hover{
      background-color: var(--color-grey-1);
    }
  }

`