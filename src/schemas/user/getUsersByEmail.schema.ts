import * as yup from 'yup';

export const getUserByEmailSchema = yup.object({
    email: yup.string().required('E-mail é obrigatorio!').email('E-mail inválido')
});

export type GetUserByEmailDTO = yup.InferType<typeof getUserByEmailSchema>;