'use strict';

const db = require('../../../../data/world-cup.json');
const { reduceMatches } = require('../../helpers/helper');

// Exports all the functions to resolve the required query
exports.team = () => db.teams;

exports.stadium = () => db.stadiums;

exports.channel = () => db.tvchannels;

exports.match = (_, args) => {
  const matches = reduceMatches(db.groups, db.knockout);
  return !args 
    ? matches 
    : matches.filter(match => Object.keys(args).every((arg) => match[arg] === args[arg]));
};

exports.group = (_, { name }) => !name
  ? Object.values(db.groups)
  : Object.values(db.groups).find(group => group.name === name);

exports.knockout = (_, { name }) => !name
  ? Object.values(db.knockout)
  : Object.values(db.knockout).find((knockout) => knockout.name === name);
