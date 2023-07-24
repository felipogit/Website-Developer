import { Link } from "react-router-dom"
import { AddUserForm } from "../../Componets/AddUserForm"
import logo from "../../assets/Logo.svg"
import { StyledContainer } from "./style"



export const RegisterPage = () => {
    return (

        <StyledContainer>
            <div>
                <img src={logo} alt="Logo" />
                <Link className="link" to="/" >Volta</Link>
            </div>
            <AddUserForm  />
        </StyledContainer>
    )
}