import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const DataContext = createContext();

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
    const response = await axios.get('http://localhost:3000/users');
    console.log(response.data);
    setUserGrowthData(response.data);
    setLoadingUserGrowth(false);
  };

  const fetchRevenueData = async () => {
    const response = await axios.get('http://localhost:3000/revenue');
    setRevenueData(response.data);
    setLoadingRevenue(false);
  };

  const fetchTopSongsData = async () => {
    const response = await axios.get('http://localhost:3000/topSongs');
    setTopSongsData(response.data);
    setLoadingTopSongs(false);
  };

  const fetchStreamsData = async () => {
    const response = await axios.get('http://localhost:3000/streams');
    setStreamsData(response.data);
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
