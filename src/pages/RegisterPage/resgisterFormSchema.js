import { z } from "zod";

const specialCharactersrRegex = /[!@#$%^&*()_+{}|:"<>?]/

export const registerFormSchema = z.object({
    name: z.string().nonempty("O nome é obrigatório."),
    email: z.string().nonempty("O email é obrigatorio.").email("Digite um e-mail válido."),
    password: z.string()
        .nonempty("A senha é obrigatória")
        .min(8, "A senha precisa conter pelo menos 8.").regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
        .regex(/(?=.*?[a-z])/, "é necessário pelo menos uma caracter minúsculo.")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um númemro.")
        .regex(specialCharactersrRegex, "É necessário pelo menos um caractere especial"),
    passwordConfimation: z.string().nonempty("Confirmar a senha é obrigatorio."),
    bio: z.string().nonempty("É obrigatorio colocar sua bio"),
    contact: z.string().nonempty("Por favor, é necessário deixar seu contato."),
    course_module: z.string().nonempty("É necessário marcar uma opção.")
}).refine(({ password, passwordConfimation }) => password === passwordConfimation, {
    message: "As senhas não correspodem.",
    path: ["passwordConfimation"],
})