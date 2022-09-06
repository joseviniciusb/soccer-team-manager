// src/app.js
const express = require("express");

const app = express();

const teams = [
  {
    id: 1,
    name: "São Paulo Futebol Clube",
    initials: "SPF",
  },
  {
    id: 2,
    name: "Clube Atlético Mineiro",
    initials: "CAM",
  },
];

app.get("/", (req, res) => res.status(200).json({ message: 'olha ele ae ó' }));
app.get("/teams", (req, res) => res.status(200).json({ message: teams }));

module.exports = app;
