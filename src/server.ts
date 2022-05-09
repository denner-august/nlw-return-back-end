import express from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const porta = 3333;
app.listen(porta, () => console.log(`http://localhost:${porta}`));
