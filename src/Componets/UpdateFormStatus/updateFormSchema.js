import { z } from "zod";

export const updateFormSchema = z.object({
    status: z.string().nonempty("Para editar, é necessário  marcar uma opção")
})