import { CreateNewsForm } from "../CreateNewsForm"
import { StyledModalAddTech, StyledContainerBox } from "./styled"

export const AddNewsTechsBox = () => {
    return(
        <StyledModalAddTech>
            <StyledContainerBox>
                <CreateNewsForm/>
            </StyledContainerBox>
        </StyledModalAddTech>
    )
}