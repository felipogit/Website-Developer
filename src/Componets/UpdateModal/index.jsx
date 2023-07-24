import { StyledContainerBox, StyledModalAddTech } from "../AddNewsTechsBox/styled"
import { UpdateFormStatus } from "../UpdateFormStatus"

export const UpdateModal = () => {
    return(
        <StyledModalAddTech>
            <StyledContainerBox>
                <UpdateFormStatus/>
            </StyledContainerBox>
        </StyledModalAddTech>
    )
}