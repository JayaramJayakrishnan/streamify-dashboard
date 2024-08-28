import { useContext } from 'react';
import DataContext from '../context/DataContext';

export const useUserGrowthData = () => {
  const { userGrowthData, loadingUserGrowth } = useContext(DataContext);
  return { userGrowthData, loadingUserGrowth };
};

export const useRevenueData = () => {
  const { revenueData, loadingRevenue } = useContext(DataContext);
  return { revenueData, loadingRevenue };
};

export const useTopSongsData = () => {
  const { topSongsData, loadingTopSongs } = useContext(DataContext);
  return { topSongsData, loadingTopSongs };
};

export const useStreamsData = () => {
  const { streamsData, loadingStreams } = useContext(DataContext);
  return { streamsData, loadingStreams };
};
