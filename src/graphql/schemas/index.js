'use strict';

const { gql } = require('apollo-server');

const query = require('./query.schema');
const mutation = require('./mutation.schema');
const world = require('./world-cup.schema');

module.exports = gql`
  ${query}
  ${mutation}
  ${world}
`;