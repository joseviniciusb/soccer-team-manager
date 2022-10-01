/* eslint-disable max-lines-per-function */
// src/app.js
const express = require('express');
const validateInitials = require('./middlewares/validateInitials');
const validateProp = require('./middlewares/validateProperty');

const app = express();
app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

let nextId = 3;

// READ
app.get('/', (req, res) => res.status(200).json({ message: 'olha ele ae ó' }));
app.get('/teams', (req, res) => res.status(200).json(teams));

// Create
app.post('/teams', validateProp, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  return res.status(201).json(team);
});

// Edit
app.put('/teams/:id', validateProp, validateInitials, (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;
  let updatedTeam;

  for (let i = 0; i < teams.length; i += 1) {
    const team = teams[i];
  
    if (team.id === Number(id)) {
      team.name = name;
      team.initials = initials;
      updatedTeam = team;

      return res.status(200).json(updatedTeam);
    }
  }
});

// Delete
app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

module.exports = app;
