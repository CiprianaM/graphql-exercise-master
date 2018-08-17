'use strict';

const query = require('./query.resolver');
const mutation = require('./mutation.resolver');
const world = require('./world-cup.resolver');

const resolvers = {
  Query: {
    team: query.team,
    stadium: query.stadium,
    channels: query.channels,
    matches: query.matches,
    group: query.group,
    knockout: query.knockout
  },
  Mutation: {
    updateMatch: mutation.updateMatch
  },
  Match: {
    home_team: world.get_home_team,
    away_team: world.get_away_team,
    stadium: world.get_stadium,
    channels: world.get_channels,
  },
  Stadium: {
    lastPlayed: world.get_lastPlayed
  }
};

module.exports = resolvers;