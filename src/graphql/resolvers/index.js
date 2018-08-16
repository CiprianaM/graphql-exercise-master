'use strict';

const query = require('./query.resolver');
const mutation = require('./mutation.resolver');
const world = require('./world-cup.resolver');

const resolvers = {
  Query: {
    team: () => query.team(),
    stadium: () => query.stadium(),
    channels: () => query.channels(),
    matches: (_, args) => query.matches(_, args),
    group: (_, { name }) => query.group(_, { name }),
    knockout: (_, { name }) => query.knockout(_, { name })
  },
  Mutation: {
    updateMatch: (_, args) => mutation.updateMatch(_, args)
  },
  Match: {
    home_team: (match) => world.get_home_team(match),
    away_team: (match) => world.get_away_team(match),
    stadium: (match) => world.get_stadium(match),
    channels: (match) => world.get_channels(match),
  },
  Stadium: {
    lastPlayed: (stadium) => world.get_lastPlayed(stadium)
  }
};

module.exports = resolvers;