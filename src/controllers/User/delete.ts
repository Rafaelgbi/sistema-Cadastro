import { Request, Response } from "express";
import { deleteUserService } from "../../services/user/deleteUser.service.js";

export async function deleteUser(req: Request, res: Response){
    try{
        const { id } = req.params;

        if(!id || typeof id !== "string"){
            return res.status(400).json({
                message: "Invalid user id"
            });
        }

            const user = await deleteUserService({id});

        return res.status(200).json({
            message: "User deleted successfully"
        })
    }catch(error:any){
        if(error.message === "USER_NOT_FOUND"){
            return res.status(404).json({
                message: "Usuário não encontrado"
            });
        }

        return res.status(500).json({
            mensage: "erro interno do servidor!"
        });
    }
};