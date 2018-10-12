# GraphQL

Time to try a new approach to manage your app’s data.

GraphQL provides a different way to interact with your server, compared to a standard RESTful API.

In this exercise you’ll create a Koa server that exposes a GraphQL interface, to serve the 2018 soccer World Cup data.

## Getting started

- To install the required dependencies run `npm install`.
- The data you need is stored in JSON format in `/data/world-cup.json`. Your
  mission is to create the interface to serve that data to a client.
- As usual, when you have a problem first look up the official docs and investigate your issue online. If you can’t quickly find a solution, call for help providing your problem’s details and the steps you’ve taken so far.

## Requirements

1. Create a Koa server from scratch in the `/src` folder.
2. Add GraphQL to your sever by installing [Apollo Server](https://www.apollographql.com/docs/apollo-server/servers/koa.html).
3. Define the types for your data entities:
    - Team
    - Stadium
    - Group
    - Kickout
    - Match
4. Modify your resolves so `Match` includes the following relations in a nested
    fashion:
    - Both teams
    - Channels airing the match
    - Stadium info
5. Add `Match` mutations so we can modify:
    - Both teams
    - Both results
    - Both penalties
    - Winner
    - Finished

## Extra credits

- Add the `lastPlayed` resolver to the `Stadium` type, which shows the last match
played there.
- Team resolvers in Match should show a string “Winner of match X" if they don’t
resolve into an existing team.
