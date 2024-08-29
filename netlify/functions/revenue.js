exports.handler = async (event, context) => {
    const data = {
      revenue: [
        { "name": "Subscriptions", "value": 400000 },
        { "name": "Ads", "value": 350000 }
      ]
    };
  
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    };
  };
  