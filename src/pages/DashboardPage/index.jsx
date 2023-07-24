import { Header } from "../../Componets/Header"
import { StyledContainer } from "./styled"
import { StyledContainerTop } from "../../styles/flex";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Technologies } from "../../Componets/Technologies";
import { AddNewsTechsBox } from "../../Componets/AddNewsTechsBox";
import { UpdateModal } from "../../Componets/UpdateModal";
import { TechContext } from "../../providers/TechContext";

export const DashboardPage = () => {
    
    const {user, isCreateOpen} = useContext(UserContext)
    const { modalIsOpen } = useContext(TechContext)
    
    return (
        <StyledContainer>
            <Header />

            <div className="TopContainer">
            <div className="container">
                <h2>Olá, {user.name}</h2>
                <p>{user.course_module}</p>
            </div>
            </div>

            <StyledContainerTop>
               
                <Technologies/>
            </StyledContainerTop>
            {isCreateOpen ? <AddNewsTechsBox/> : null}
            {modalIsOpen ? <UpdateModal/> : null}
        </StyledContainer>

    )
}