import { prisma} from "../../prisma.js";

export const userRepository = {
    async findByEmail(email: string){
        return prisma.user.findUnique({
            where: {email},
        });
    },


    async create(data: {name: string; email: string; password: string}){
        return prisma.user.create({
            data,
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
            },
        });
    },
}