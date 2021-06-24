import { Request, Response, NextFunction } from "express";

// Verifica se user é admin
export function ensureAdmin(request: Request, response: Response, next: NextFunction) {

    const isAdmin = false;

    if (isAdmin) {
        return next();
    }

    // 401: Status Unauthorized 
    // (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
    return response.status(401).json({
        error: "User is not admin.",
    })
}