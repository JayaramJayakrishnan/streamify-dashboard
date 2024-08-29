exports.handler = async (event, context) => {
    const data = {
      streams: [
        { "song": "Song A", "artist": "Artist 1", "date": "2023-08-01", "streams": 150, "userId": "U001" },
        { "song": "Song B", "artist": "Artist 2", "date": "2023-08-02", "streams": 200, "userId": "U002" },
        { "song": "Song C", "artist": "Artist 1", "date": "2023-08-03", "streams": 100, "userId": "U003" },
        { "song": "Song D", "artist": "Artist 3", "date": "2023-08-04", "streams": 250, "userId": "U004" },
        { "song": "Song E", "artist": "Artist 2", "date": "2023-08-05", "streams": 300, "userId": "U005" }
      ]
    };
  
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    };
  };
  