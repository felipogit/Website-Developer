import { useContext } from "react"
import { StyledCard } from "./styled"
import { TechContext } from "../../providers/TechContext"

export const CardTechngies = ({tech}) => {
    const { setModalIsOpen, updateData } = useContext(TechContext)
    return(
        <StyledCard onClick={() => updateData(tech)} >
            <h3>{tech.title}</h3>
            <h3>{tech.status}</h3>
        </StyledCard>
    )
}