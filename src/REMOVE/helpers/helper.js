'use strict';

const fs = require('fs');
const path = require('path');

const JsonDb = path.join(__dirname, '../../../data/world-cup.json');

exports.writeJSON = (data) => {
  fs.writeFile(JsonDb, JSON.stringify(data, null, 2), (err) => {
    console.log(err || 'The file was saved!'); // eslint-disable-line no-console
  });
};

exports.reduceMatches = (groups, knockouts) => [
  ...Object.values(groups).flatMap(group => group.matches),
  ...Object.values(knockouts).flatMap(knockout => knockout.matches),
];
