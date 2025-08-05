import express, { Request, Response } from "express";
import { config } from "dotenv";
import router from "./routes/router";

config({
  debug: false,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
