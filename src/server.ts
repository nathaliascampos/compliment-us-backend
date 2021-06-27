import express, { Request, Response, NextFunction } from 'express';

import "reflect-metadata";
import "express-async-errors";

import cors from "cors";

import { router } from "./routes";

import "./database";

const app = express();

// Habilitar que outras fontes -sem ser backend- possam acessar a aplicação 
app.use(cors());

// para usar o json no body é preciso inserir essa linha
app.use(express.json());

app.use(router);

// Middleware de erro
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message,
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
    })

})

// http://localhost:3000 
app.listen(3000, () => console.log("Server is running."))