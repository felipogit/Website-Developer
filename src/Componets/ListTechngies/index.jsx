import { useContext } from "react"
import { CardTechngies } from "../CardTechngies"
import { StyledList } from "./styled"
import { TechContext } from "../../providers/TechContext"


export const ListTechnologies = () => {
    const { techs } = useContext(TechContext)
    return(
        <StyledList>
            {techs.map(tech => {
                return <CardTechngies key={tech.id} tech={tech} />
            })}
        </StyledList>
    )
}