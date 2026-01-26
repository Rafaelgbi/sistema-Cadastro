import { prisma } from '../prisma.js';
import { CreateUserDTO } from "../schemas/user.schema.js";
import bcrypt from 'bcrypt';

export const userService = {
    async create(data: CreateUserDTO){

        const emailExists = await prisma.user.findUnique({
            where: { email: data.email },
        });

        if (emailExists) {
            throw new Error("EMAIL_ALREADY_EXISTS")
        };

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = await prisma.user.create({
            data: {
                nome: data.nome,
                email: data.email,
                password: hashedPassword,
            },
            select:{
                id: true,
                nome: true,
                email: true,
                createdAt: true,
            },
        });

        return user;
    },
};