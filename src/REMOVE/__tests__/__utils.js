const { ApolloServer } = require('apollo-server');

const typeDefs = require('../graphql/schemas');
const resolvers = require('../graphql/resolvers');
const db = require('../graphql/db');
const gql = require('graphql-tag');


const constructTestServer = () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  return server;
};

module.exports.constructTestServer = constructTestServer;

const GET_MATCHES = gql`
  query matches {
    matches {
      id
      type
      home_team {
        id
      }
      away_team {
        id
      }
      home_score
      away_score
      home_scorers
      away_scorers
      date
      stadium {
        id
      }
      time_elapsed
      finished
      matchday
      winner
      loser
    }
  }
`;

const GET_STADIUMS = gql`
  query stadiums {
    stadiums {
      id
      name
      city
      latitude
      longitude
      image
      last_played {
        id
      }
    }
  }
`;

const GET_TEAMS = gql`
  query teams {
    teams {
      id
      name
      iso2
      flag
      emoji
      emoji_string
    }
  }
`;

const GET_GROUPS = gql`
  query groups {
    groups{
      name
      winner {
        id
      }
      runnerup {
        id
      }
      matches {
        id
      }
      closing_match {
        id
      }
    }
  }
`;

const GET_KNOCKOUTS = gql`
  query knockouts {
    knockouts{
      name
      matches {
        id
      }
    }
  }
`;

module.exports.queries = {
  GET_MATCHES,
  GET_STADIUMS,
  GET_TEAMS,
  GET_GROUPS,
  GET_KNOCKOUTS
};