const express = require('express');
const validateInitials = require('./middlewares/validateInitials');
const validateProp = require('./middlewares/validateProperty');
const validateAuthorization = require('./middlewares/validateAuthorization');

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

app.get('/teams', validateAuthorization, (req, res) => res.status(200).json(teams));

// Create
app.post('/teams', validateProp, validateInitials, (req, res) => {
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

  teams.map((team) => console.log(team));

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
  if (arrayPosition === -1) {
    return res.status(404).json({ message: 'time não encontrado!' });
  }

  teams.splice(arrayPosition, 1);

  return res.status(200).json(teams);
});

module.exports = app;
