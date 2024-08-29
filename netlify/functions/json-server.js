const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');

// Read the JSON file
const dbPath = path.join(__dirname, '../../db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Create a new JSON Server instance
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

exports.handler = async (event, context) => {
  const server = jsonServer.create();

  // Apply middlewares
  server.use(middlewares);
  server.use(router);

  return new Promise((resolve, reject) => {
    // Create a mock request and response
    const req = { ...event };
    const res = {
      statusCode: 200,
      body: '',
      headers: {},
      setHeader: function (name, value) {
        this.headers[name] = value;
      },
      end: function (body) {
        this.body = body;
      }
    };

    // Handle the request
    server(req, res => {
      resolve({
        statusCode: res.statusCode,
        body: res.body,
        headers: res.headers,
      });
    });
  });
};
