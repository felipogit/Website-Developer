import { FormLogin } from "../../Componets/FormLogin"
import { StyledContainerLogin } from "./styled"
import logo from "../../assets/Logo.svg"

export const LoginPage = ({setUser}) => {
    return (
        <StyledContainerLogin>
            <img src={logo} alt="Logo" />
            <FormLogin setUser={setUser}/>
        </StyledContainerLogin>
        
    )
}