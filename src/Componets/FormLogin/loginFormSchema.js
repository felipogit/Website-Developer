import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().nonempty("É necessário digitar um email válido").email("É necessário digitar um email válido"),
    password: z.string().nonempty("A senha é obrigatoria")
})