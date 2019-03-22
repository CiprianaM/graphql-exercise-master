'use strict';

const query = require('./query.resolver');
const mutation = require('./mutation.resolver');
const types = require('./types.resolver');

const resolvers = {
  Query: {
    team: query.team,
    stadium: query.stadium,
    match: query.match,
    group: query.group,
    knockout: query.knockout
  },
  Mutation: {
    updateMatch: mutation.updateMatch
  },
  Match: {
    home_team_id: types.get_home_team,
    away_team_id: types.get_away_team,
    stadium_id: types.get_stadium,
  },
  Stadium: {
    last_played: types.get_lastPlayed
  },
  Group: {
    closing_match: types.closing_match
  }
};

module.exports = resolvers;