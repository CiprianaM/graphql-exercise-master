'use strict';

const query = require('./query.resolver');
const mutation = require('./mutation.resolver');
const types = require('./types.resolver');

const resolvers = {
  Query: {
    team: query.team,
    stadium: query.stadium,
    channel: query.channel,
    match: query.match,
    group: query.group,
    knockout: query.knockout
  },
  Mutation: {
    updateMatch: mutation.updateMatch
  },
  Match: {
    home_team: types.get_home_team,
    away_team: types.get_away_team,
    stadium: types.get_stadium,
    channels: types.get_channels,
  },
  Stadium: {
    last_played: types.get_lastPlayed
  },
  Group: {
    closing_match: types.closing_match
  }
};

module.exports = resolvers;