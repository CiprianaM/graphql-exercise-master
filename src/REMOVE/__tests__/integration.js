const { createTestClient } = require('apollo-server-testing');
const { constructTestServer, queries } = require('./__utils');
const { GET_MATCHES, GET_STADIUMS, GET_TEAMS, GET_CHANNELS, GET_GROUPS, GET_KNOCKOUTS } = queries;


describe('Queries', () => {
  const server = constructTestServer();
  const { query } = createTestClient(server);
  let res;

  it('fetches list of matches', async () => {
    res = await query({query: GET_MATCHES});
    expect(res).toMatchSnapshot();
  });

  it('fetches list of stadiums', async () => {
    res = await query({query: GET_STADIUMS});
    expect(res).toMatchSnapshot();
  });

  it('fetches list of teams', async () => {
    res = await query({query: GET_TEAMS});
    expect(res).toMatchSnapshot();
  });

  it('fetches list of channels', async () => {
    res = await query({query: GET_CHANNELS});
    expect(res).toMatchSnapshot();
  });

  it('fetches list of groups', async () => {
    res = await query({query: GET_GROUPS});
    expect(res).toMatchSnapshot();
  });

  it('fetches list of knockout', async () => {
    res = await query({query: GET_KNOCKOUTS});
    expect(res).toMatchSnapshot();
  });
});
