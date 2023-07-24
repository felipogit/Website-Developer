import { z } from "zod";

export const createNewsForm = z.object({
    title: z.string().nonempty("O nome da da Tecnologia é obrigatória!"),
    status: z.string().nonempty("É obrigatorio marcar uma opção!")
})