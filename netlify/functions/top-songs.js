exports.handler = async (event, context) => {
    const data = {
      topSongs: [
        { "song": "Song A", "streams": 2400 },
        { "song": "Song B", "streams": 1398 },
        { "song": "Song C", "streams": 9800 },
        { "song": "Song D", "streams": 3908 },
        { "song": "Song E", "streams": 4800 }
      ]
    };
  
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    };
  };
  