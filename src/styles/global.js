import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
:root {
    --font-primary: 'Inter', sans-serif;
	--color-color-primary: #ff577f;
	--color-color-primary-50: #ff427f;
	--color-color-primary-disable: #59323f;
	--color-grey-4: #121214;
	--color-grey-3: #212529;
	--color-grey-2: #343b41;
	--color-grey-1: #868e96;
	--color-grey-0: #f8f9fa;
	--color-sucess: #3fe864;
	--color-negative: #e83f5b;
}

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

button{
    cursor: pointer;
    background: transparent;
    border: none;
}

a{
    color: unset;
    text-decoration: none;
}

ul, ol{
    list-style: none;
}
body{
    font-family:var( --font-primary) ;
}

input{
    border-radius: 0;
    border: none;
    background: transparent;
}

img{
    max-width: 100%;
}

`