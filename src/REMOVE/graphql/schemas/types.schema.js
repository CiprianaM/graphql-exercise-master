module.exports = `
  type Team {
    id: Int!
    name: String!
    iso2: String!
    flag: String!
    emoji: String!
    emoji_string: String!
  }

  type Stadium {
    id: Int!
    name: String!
    city: String!
    latitude: Float!
    longitude: Float!
    image: String!
    last_played: Match
  }

  type Group {
    name: String!
    winner: Team
    runnerup: Team
    matches(id: Int): [Match]!
    closing_match: Match
  }

  type Knockout {
    name: String!
    matches(id: Int): [Match]!
  }

  type Match {
    id: Int!
    type: String!
    home_team: Team!
    away_team: Team!
    home_score: String!
    away_score: String!
    home_scorers: String
    away_scorers: String
    home_penalty: String
    away_penalty: String
    date: String!
    stadium: Stadium!
    time_elapsed: String!
    finished: Boolean!
    matchday: Int!
    winner: String
    loser: String
  }
  `;