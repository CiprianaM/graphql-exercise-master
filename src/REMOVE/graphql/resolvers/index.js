'use strict';

const query = require('./query.resolver');
const mutation = require('./mutation.resolver');
const types = require('./types.resolver');

const resolvers = {
  Query: {
    teams: query.team,
    stadiums: query.stadium,
    matches: query.match,
    groups: query.group,
    knockouts: query.knockout
  },
  Mutation: {
    updateMatch: mutation.updateMatch
  },
  Match: {
    home_team: types.get_home_team,
    away_team: types.get_away_team,
    stadium: types.get_stadium,
  },
  Stadium: {
    last_played: types.get_lastPlayed
  },
  Group: {
    closing_match: types.closing_match
  }
};

module.exports = resolvers;