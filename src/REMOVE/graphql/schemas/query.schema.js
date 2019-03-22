module.exports = `
type Query {
    match(
      id: Int
      type: String
      home_team_id: Int
      away_team_id: Int
      home_team: String
      away_team: String
      home_score: String
      away_score: String
      home_scorers: String
      away_scorers: String
      date: String
      stadium_id: Int
      time_elapsed: String
      finished: Boolean
      matchday: Int
      ): [Match]
    stadium: [Stadium]
    team: [Team]
    group(name: String): [Group]
    knockout(name: String): [Knockout]
  }
  `;