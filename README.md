# GraphQL

Time to try a new approach to manage your app’s data.

GraphQL provides a different way to interact with your server, compared to a standard RESTful API.

In this exercise you’ll create a server with Apollo Server that exposes a GraphQL interface, to serve the 2018 soccer World Cup data.

## Getting started

- To install the required dependencies run `npm install`.
- The data you need is stored in JSON format in `/data/world-cup.json`. Your mission is to create the interface to serve that data to a client.
- As usual, when you have a problem first look up the official docs and investigate your issue online. If you can’t quickly find a solution, call for help providing your problem’s details and the steps you’ve taken so far.

## Requirements

1. Create a GraphQL server from scratch in the `/src` folder by installing [Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started).

2. Define the types and the resolvers for your data entities:
    - Team
    - Stadium
    - Group
    - Knockout
    - Match

This is how the type Match should be defined:
```
type Match {
    id: Int!
    home_team: Team!
    away_team: Team!
    home_score: String!
    away_score: String!
    home_penalty: String
    away_penalty: String
    finished: Boolean!
    date: String!
    winner: String
    stadium: Stadium!
}
```
3. Modify your resolvers so `Match` includes the following relations in a nested fashion:
    - Both teams
    - Stadiums info

4. Add `Match` mutations so we can modify:
    - Both teams
    - Both results
    - Both penalties
    - Winner
    - Finished

## Extra credits

- Add the `last_played` resolver to the `Stadium` type, which shows the last match played there.
- Add the `closing_match` resolver to the `Group` type, which shows the last match played of the group.

