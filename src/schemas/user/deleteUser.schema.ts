import * as yup from "yup";

export const deleteUserSchema = yup.object({
    id: yup.string().required('E-mail é obrigatorio!').uuid('formato do ID invalido')
});

export type deleteUserSchemaDTO = yup.InferType<typeof deleteUserSchema>;