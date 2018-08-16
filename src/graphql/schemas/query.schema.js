module.exports = `
type Query {
    matches(
      name: Int
      type: String
      home_team: Int
      away_team: Int
      home_result: Int
      away_result: Int
      home_penalty: Int
      away_penalty: Int
      winner: Int
      date: String
      stadium: Int
      channels: [Int]
      finished: Boolean
      ): [Match]
    stadium: [Stadium]
    team: [Team]
    channels: [Channel]
    group(name: String): [Group]
    knockout(name: String): [Knockout]
  }
  `;