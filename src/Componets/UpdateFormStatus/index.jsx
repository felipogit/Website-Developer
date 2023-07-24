import { useForm } from "react-hook-form"
import { useContext } from "react"
import { updateFormSchema } from "./updateFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { StyledConteinerUpdate, StyledFormUpdate } from "./styled"
import { toast } from "react-toastify"
import { TechContext } from "../../providers/TechContext"

export const UpdateFormStatus = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(updateFormSchema)
    })
    const { deleteCard, currentTec, setModalIsOpen, updateCard } = useContext(TechContext)


    const submit = (formData) => {
        toast("Tecnologia atualizada!")
        updateCard(currentTec.id, formData.status)
        setModalIsOpen(false)
    }

    return (
        <StyledConteinerUpdate>
            <div > <h3>Tecnologias Detalhes</h3> <button onClick={() => setModalIsOpen(false)} >X</button>  </div>
            <StyledFormUpdate onSubmit={handleSubmit(submit)}>
                <div>
                    <label>Nome</label>
                    <input type="text" readOnly value={currentTec.title} {...register("title")} />
                </div>
                <div>
                    <label >Selecione um status</label>
                    <select  {...register("status")} >
                        <option value="">Maque uma opção</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermedediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    {errors.status ? <p>{errors.status.message}</p> : null}
                </div>
               <div className="ContainerButton">
                <button type="submit" >Salvar Alterações</button>
                <button type="button" className="StyledButton" onClick={() => deleteCard(currentTec.id)}>Excluir</button>
               </div>

            </StyledFormUpdate>
        </StyledConteinerUpdate
        >
    )
}