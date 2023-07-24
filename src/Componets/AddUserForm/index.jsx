import { useForm } from "react-hook-form";
import { StyledForm } from "./style";
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema } from "../../pages/RegisterPage/resgisterFormSchema";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const AddUserForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(registerFormSchema)
  });

  const { createUser } = useContext(UserContext)

  const submit = async (formData) => {
    await createUser(formData)
    reset()
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <h2>Crie sua Conta</h2>
      <span>Rapido e grátis, vamos nessa</span>

      <div>
      <label>Nome</label>
      <input type="text" {...register("name")} placeholder="Digite aqui seu nome" />
      {errors.name ? <p>{errors.name.message}</p> : null}
      </div>
      <div>
      <label>Email</label>
      <input type="text" {...register("email")} placeholder="Digite aqui seu email" />
      {errors.email ? <p>{errors.email.message}</p> : null}
      </div>
      <div>
      <label>Senha</label>
      <input type="password" {...register("password")} placeholder="Digite aqui sua senha" />
      {errors.password ? <p>{errors.password.message}</p> : null}
      </div>
      <div>
      <label>Confirme sua senha</label>
      <input type="password" {...register("passwordConfimation")} placeholder="Digite novamente sua senha" />
      {errors.passwordConfimation ? <p>{errors.passwordConfimation.message}</p> : null}
      </div>
      <div>
      <label>Bio</label>
      <input type="text" {...register("bio")} placeholder="Fale sobre você" />
      {errors.bio ? <p>{errors.bio.message}</p> : null}
      </div>
      <div>
      <label>Contato</label>
      <input type="text" {...register("contact")} placeholder="Opção de contato" />
      {errors.contact ? <p>{errors.contact.message}</p> : null}
      </div>
      <div>
      <label>Selecionar Modo</label>
      <select {...register("course_module")} >
        <option value="">Selecione o módulo</option>
        <option value="Primeiro módulo">Primeiro módulo</option>
        <option value="Segundo módulo">Segundo módulo</option>
      </select>
      {errors.course_module ? <p>{errors.course_module.message}</p> : null}
      </div>
      <button>Cadastrar</button>
    </StyledForm>
  )
}
