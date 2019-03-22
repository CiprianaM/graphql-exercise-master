'use strict';

const db = require('../db');
const { reduceMatches } = require('../../helpers/helper');

// Exports all the functions to resolve the required query
exports.team = () => db.teams;

exports.stadium = () => db.stadiums;

exports.match = (_, args) =>
  reduceMatches(db.groups, db.knockout).filter((match) =>
    Object.keys(args).every((arg) => match[arg] === args[arg])
  );

exports.group = (_, { name }) =>
  !name
    ? Object.values(db.groups)
    : Object.values(db.groups).filter((group) => group.name === name);

exports.knockout = (_, { name }) =>
  !name
    ? Object.values(db.knockout)
    : Object.values(db.knockout).filter((knockout) => knockout.name === name);
