import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useTopSongsData } from '../hooks';
import Spinner from './Spinner'
const TopStreamedSongsChart = () => {

  const { topSongsData, loadingTopSongs } = useTopSongsData();

  if (loadingTopSongs) return(
    <div className='w-full border rounded-lg h-[340px] flex justify-center items-center'>
      <Spinner />
    </div>
  ) 

  return(
    <div className='h-[340px] bg-gradient-to-b from-indigo-50 to-white flex flex-col border-2 rounded-lg p-2 shadow-sm'>
      <h1 className="text-base font-medium mb-3">Top Streamed Songs</h1>
      <div className='grow'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={topSongsData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="song" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="streams" fill="#4338ca" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
};
export default TopStreamedSongsChart;
