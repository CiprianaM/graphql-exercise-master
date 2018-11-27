'use strict';

const fs = require('fs');
const path = require('path');

const JsonDb = path.join(__dirname, '../../../data/world-cup.json');

exports.writeJSON = (data) => {
  fs.writeFileSync(JsonDb, JSON.stringify(data, null, 2), (err) => {
    if (err) console.log(err); // eslint-disable-line no-console
    else console.log('The file was saved!'); // eslint-disable-line no-console
  });
};

exports.reduceMatches = (groups, knockouts) => [
  ...Object.values(groups).reduce(
    (acc, value) => [...acc, ...value.matches],
    []
  ),
  ...Object.values(knockouts).reduce(
    (acc, value) => [...acc, ...value.matches],
    []
  ),
];
