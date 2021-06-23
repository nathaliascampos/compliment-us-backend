import "reflect-metadata";
import express from 'express';

import { router } from "./routes";

import "./database";

const app = express();

// para usar o json no body é preciso inserir essa linha
app.use(express.json());

// // @GET
// app.get("/test", (request, response) => {
//     // Request => entrando 
//     // Responde => saindo 
//     return response.send('Olá NLW!')
// })

// app.post("/test-post", (request, response) => {
//     return response.send('Olá NLW!')
// })

app.use(router);

// http://localhost:3000 
app.listen(3000, () => console.log("Server is running."))