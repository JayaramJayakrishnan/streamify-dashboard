const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  const dbPath = path.join(__dirname, '../../public/db.json');
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  return {
    statusCode: 200,
    body: JSON.stringify(data.revenue),
    headers: { 'Content-Type': 'application/json' },
  };
};
