const { ApolloServer } = require('apollo-server');

const typeDefs = require('../graphql/schemas');
const resolvers = require('../graphql/resolvers');
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
  query match {
    match{
      id
      type
      home_team {
        id
      }
      away_team {
        id
      }
      home_result
      away_result
      home_penalty
      away_penalty
      winner {
        id
      }
      date
      stadium {
        id
      }
      channels {
        id
      }
      finished
      matchday
    }
  }
`;

const GET_STADIUMS = gql`
  query stadium {
    stadium {
      id
      name
      city
      lat
      lng
      image
      last_played {
        id
      }
    }
  }
`;

const GET_TEAMS = gql`
  query team {
    team{
      id
      name
      fifaCode
      iso2
      flag
      emoji
      emojiString
    }
  }
`;

const GET_CHANNELS = gql`
  query channel {
    channel{
      id
      name
      icon
      country
      iso2
      lang
    }
  }
`;

const GET_GROUPS = gql`
  query group {
    group{
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
  query knockout {
    knockout{
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
  GET_CHANNELS,
  GET_GROUPS,
  GET_KNOCKOUTS
};