import { useContext, useState } from "react"
import { ListTechnologies } from "../ListTechngies"
import { StyledContainerTechnogies } from "./styled"
import { UserContext } from "../../providers/UserContext"

export const Technologies = () => {
    const { setIsCreateOpen, isCreateOpen } = useContext(UserContext)

    return(
        <StyledContainerTechnogies>
            <div>
            <h2>Tecnologias</h2>
            <button onClick={() => setIsCreateOpen(!isCreateOpen)}>
                +
            </button>
            </div>

            <ListTechnologies/>
        </StyledContainerTechnogies>
    )
}