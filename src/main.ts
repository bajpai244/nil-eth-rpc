import express from "express";

const main = async () => {
  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {});
};

main();
