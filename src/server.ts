import express from 'express';
import { router } from './routes.js';

const server = express();
const port = 3000;

server.use(express.json());

//chamando as routes
server.use(router);

//testando
server.get('/test', (req, res)=>{
    return res.status(200).json({msg:'Rota de test, OK!'})
});

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});