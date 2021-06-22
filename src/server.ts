import express from 'express';

const app = express();


// @GET 
app.get("/test", (request, response) => {
    // Request => entrando 
    // Responde => saindo 
    return response.send('Olá NLW!')
})

app.post("/test-post", (request, response) => {
    return response.send('Olá NLW!')
})

// http://localhost:3000 
app.listen(3000, () => console.log("Server is running."))