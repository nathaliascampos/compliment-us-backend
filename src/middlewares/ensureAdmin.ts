import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

// Verifica se user é admin
export async function ensureAdmin(
    request: Request,
    response: Response,
    next: NextFunction) {

    const { user_id } = request

    // console.log(user_id)

    const usersRepositories = getCustomRepository(UsersRepositories)

    const { admin } = await usersRepositories.findOne(user_id)

    // Verificar se user é admin
    // const isAdmin = false;

    if (admin) {
        return next();
    }

    // 401: Status Unauthorized 
    // (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
    return response.status(401).json({
        error: "User is not admin.",
    })
}