import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const DataContext = createContext();

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const DataProvider = ({ children }) => {
  const [userGrowthData, setUserGrowthData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [topSongsData, setTopSongsData] = useState([]);
  const [streamsData, setStreamsData] = useState([]);

  const [loadingUserGrowth, setLoadingUserGrowth] = useState(true);
  const [loadingRevenue, setLoadingRevenue] = useState(true);
  const [loadingTopSongs, setLoadingTopSongs] = useState(true);
  const [loadingStreams, setLoadingStreams] = useState(true);

  const fetchUserGrowthData = async () => {
    const response = await axios.get(`${apiUrl}/users`);
    setUserGrowthData(response.data.users);
    console.log(response.data);
    setLoadingUserGrowth(false);
  };

  const fetchRevenueData = async () => {
    const response = await axios.get(`${apiUrl}/revenue`);
    console.log(response.data);
    setRevenueData(response.data.revenue);
    setLoadingRevenue(false);
  };

  const fetchTopSongsData = async () => {
    const response = await axios.get(`${apiUrl}/top-songs`);
    console.log(response.data);
    setTopSongsData(response.data.topSongs);
    setLoadingTopSongs(false);
  };

  const fetchStreamsData = async () => {
    const response = await axios.get(`${apiUrl}/streams`);
    console.log(response.data);
    setStreamsData(response.data.streams);
    setLoadingStreams(false);
  };

  useEffect(() => {
    fetchUserGrowthData();
    fetchRevenueData();
    fetchTopSongsData();
    fetchStreamsData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        userGrowthData,
        revenueData,
        topSongsData,
        streamsData,
        loadingUserGrowth,
        loadingRevenue,
        loadingTopSongs,
        loadingStreams,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
