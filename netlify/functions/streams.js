const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  const dbPath = path.join(__dirname, '../../db.json');
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  return {
    statusCode: 200,
    body: JSON.stringify(data.streams),
    headers: { 'Content-Type': 'application/json' },
  };
};
