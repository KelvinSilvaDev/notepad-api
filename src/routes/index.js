import express from "express";
import notes from "./notepadRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.send("Hello World!");
  });
  app.use(express.json(), notes);
};

export default routes;
