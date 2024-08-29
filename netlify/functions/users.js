exports.handler = async (event, context) => {
    const data = {
      users: [
        { "month": "Jan", "totalUsers": 12000, "activeUsers": 3000 },
        { "month": "Feb", "totalUsers": 15000, "activeUsers": 4000 },
        { "month": "Mar", "totalUsers": 18000, "activeUsers": 4500 },
        { "month": "Apr", "totalUsers": 20000, "activeUsers": 5000 },
        { "month": "May", "totalUsers": 23000, "activeUsers": 5500 },
        { "month": "Jun", "totalUsers": 26000, "activeUsers": 6000 },
        { "month": "Jul", "totalUsers": 29000, "activeUsers": 6500 },
        { "month": "Aug", "totalUsers": 32000, "activeUsers": 7000 },
        { "month": "Sep", "totalUsers": 35000, "activeUsers": 7500 },
        { "month": "Oct", "totalUsers": 38000, "activeUsers": 8000 },
        { "month": "Nov", "totalUsers": 41000, "activeUsers": 8500 },
        { "month": "Dec", "totalUsers": 44000, "activeUsers": 9000 }
      ]
    };
  
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    };
  };
  