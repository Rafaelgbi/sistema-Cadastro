import * as yup from 'yup';

export const createUserSchema = yup.object({
    nome: yup.string().required('Nome é obrigatório!').min(3,'o nome deve ter no minímo 3 caracteres!'),
    email: yup.string().required('E-mail obrigatório!').email('email invalído'),
    password: yup.string().min(6,'a senha deve conter no minimo 6 caracteres').required('senha é obrigatoria!')
});

export type CreateUserDTO = yup.InferType<typeof createUserSchema>;