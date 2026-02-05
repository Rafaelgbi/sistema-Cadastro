import express from 'express';
import { router } from './routes.js';
import sweggerUi from 'swagger-ui-express';
import swagggerDocs from './swagger.json' with { type: "json" };;

const server = express();
const port = 3000;

server.use(express.json());

server.use('/api-docs', sweggerUi.serve, sweggerUi.setup(swagggerDocs))

//chamando as routes
server.use(router);

//testando
server.get('/test', (req, res)=>{
    return res.status(200).json({msg:'Rota de test, OK!'})
});

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});