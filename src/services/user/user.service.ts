import { userRepository } from "repositories/user/user.repository.js";
import { CreateUserDTO } from "../../schemas/user/user.schema.js";
import bcrypt from 'bcrypt';

export const userService = {
    async create(data: CreateUserDTO){

        const emailExists = await userRepository.findByEmail(data.email);

        if (emailExists) {
            throw new Error("EMAIL_ALREADY_EXISTS")
        };

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = await userRepository.create({
                name: data.nome,
                email: data.email,
                password: hashedPassword,
        });

        return user;
    },
};