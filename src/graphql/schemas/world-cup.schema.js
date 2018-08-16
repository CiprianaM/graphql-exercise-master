module.exports = `
  type Team {
    id: ID
    name: String
    fifaCode: String
    iso2: String
    flag: String
    emoji: String
    emojiString: String
  }

  type Stadium {
    id: Int!
    name: String!
    city: String!
    lat: Float!
    lng: Float!
    image: String!
    lastPlayed: Match
  }

  type Group {
    name: String!
    winner: Team!
    runnerup: Team!
    matches(name: Int): [Match]!
  }

  type Knockout {
    name: String!
    matches(name: Int): [Match]!
  }

  type Match {
    name: Int!
    type: String!
    home_team: Team
    away_team: Team
    home_result: Int
    away_result: Int
    home_penalty: Int
    away_penalty: Int
    winner: Team
    date: String!
    stadium: Stadium!
    channels: [Channel]!
    finished: Boolean!
  }

  type Channel {
    id: ID!
    name: String!
    icon: String!
    country: String!
    iso2: String!
    lang: [String]!
  }
  `;