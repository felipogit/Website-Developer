import { useContext } from "react"
import logo from "../../assets/Logo.svg"
import { StyledContainerTop } from "../../styles/flex"
import { StyledHeader } from "./styled"
import { UserContext } from "../../providers/UserContext"

export const Header = () => {
    
    const {handleLogout} = useContext(UserContext)
    
    return (
        <StyledContainerTop>
        <StyledHeader>
            <img src={logo} alt="Logo" />
            <button onClick={handleLogout}>Sair</button>
        </StyledHeader>
        </StyledContainerTop>

    )
}
