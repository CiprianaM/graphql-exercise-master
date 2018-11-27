'use strict';

const db = require('../../../../data/world-cup.json');
const { reduceMatches, writeJSON } = require('../../helpers/helper');

// Export the function to update the match type
exports.updateMatch = (_, args) => {
  const { name } = args;
  const match = reduceMatches(db.groups, db.knockout).find(match => match.name === name);
  if (!match) {
    throw new Error(`Couldn't find match with name ${name}`);
  }
  Object.keys(args).forEach((arg) => {
    match[arg] = args[arg];
  });
  writeJSON(db);
  return match;
};
