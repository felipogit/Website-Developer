import { useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledContainerAddTech, StyledFormTech } from "./styled";
import { UserContext } from "../../providers/UserContext";
import { createNewsForm } from "./createNewsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { TechContext } from "../../providers/TechContext";

export const CreateNewsForm = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: zodResolver(createNewsForm)
    })
    
    const { createNews } = useContext(TechContext)
    const {setIsCreateOpen, isCreateOpen } = useContext(UserContext)

    const submit = (formData) => {
        toast("Tecnologia adicionada!")
        createNews(formData)
        setIsCreateOpen(false)
    }

    return(
        <StyledContainerAddTech>
        <div className="Test"> <h3>Cadastrar Tecbologia</h3> <button onClick={() => setIsCreateOpen(!isCreateOpen)} >X</button>  </div> 
        <StyledFormTech onSubmit={handleSubmit(submit)}>
           <div>
           <label>Nome</label>
            <input type="text" placeholder="Digite seu nome" {...register("title")} />
            {errors.title ? <p>{errors.title.message}</p> : null}
           </div>
            <div>
            <label >Selecione um status</label>
            <select {...register("status")} >
                <option value="" >Marque uma opção</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermedediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            {errors.status ? <p>{errors.status.message}</p> : null}
            </div>
            <button type="submit" >Cadastrar Tecnologia</button>
        </StyledFormTech>
        </StyledContainerAddTech>
    )   
}