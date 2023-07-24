import { Link } from "react-router-dom"
import { StyledFormLogin } from "./style"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema } from "./loginFormSchema";
import { IoEyeOutline, IoEyeOff } from "react-icons/io5";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";


export const FormLogin = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [ loading, setLoading ] = useState(false)

    const tooglePasswordVisiblity = () => {
        setShowPassword((prevState) => !prevState)
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema)
    })

    const { login} = useContext(UserContext)
    

    const submit = async (formData) => {
        await login(formData, setLoading)
        reset()
    }

    return (
        <StyledFormLogin onSubmit={handleSubmit(submit)} >
            <h2>Login</h2>
            <div>
                <label>Email</label>
                <input type="text" placeholder="Digite seu email" {...register("email")} />
                {errors.email ? <p>{errors.email.message}</p> : null}
            </div>

            <div>
                <label>Senha</label>
                <input type={showPassword ? "text" : "password"} placeholder="Digite sua senha" {...register("password")} />
                <div className="olhinho" onClick={tooglePasswordVisiblity}>{showPassword ? <IoEyeOff /> : <IoEyeOutline />}</div>

                {errors.password ? <p>{errors.password.message}</p> : null}
            </div>
            <button className="buttonEntrar" type="submit" > {loading ? "Entrando..." : "Entrar"}</button>
            <span>Ainda não possui conta?</span>
            <Link className="link" to="/register">Cadastre-se</Link>
        </StyledFormLogin>
    )
}