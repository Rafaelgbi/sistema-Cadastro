import express from "express";
import { router } from "./routes.js";
import swaggerUi from "swagger-ui-express";
import SwaggerParser from "@apidevtools/swagger-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();
const port = 3000;

server.use(express.json());

async function setupSwagger() {
  const swaggerPath = path.join(__dirname, "docs", "swagger.json");

  // 🔥 Aqui ele junta todos os arquivos referenciados
  const api = await SwaggerParser.bundle(swaggerPath);

  server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(api));
}

await setupSwagger();

// suas rotas
server.use(router);

server.get("/test", (req, res) => {
  return res.status(200).json({ msg: "Rota de teste OK!" });
});

server.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
  console.log(`📘 Swagger em http://localhost:${port}/api-docs`);
});
