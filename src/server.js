import express from "express";
import petsRouter from "./routes/pets.router.js";
import __dirname from "./utils.js";
import path from "path";

const server = express();

server.use(express.static(path.join(__dirname, "./public")));
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use(petsRouter);

server.listen(8080, () => console.log("Servidor levantado"));
