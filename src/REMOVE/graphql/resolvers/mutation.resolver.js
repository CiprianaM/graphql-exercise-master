'use strict';

const db = require('../db');
const { reduceMatches, writeJSON } = require('../../helpers/helper');

// Export the function to update the match type
exports.updateMatch = (_, args) => {
  const { name } = args;
  const match = reduceMatches(db.groups, db.knockout).find(match => match.name === name);
  if (!match) {
    throw new Error(`Couldn't find match with name ${name}`);
  }
  Object.assign(match, args);
  writeJSON(db);
  return match;
};
