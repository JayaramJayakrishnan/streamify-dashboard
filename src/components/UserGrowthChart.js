import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useUserGrowthData } from '../hooks';
import Spinner from './Spinner'
const UserGrowthChart = () => {
  const { userGrowthData, loadingUserGrowth } = useUserGrowthData();
  console.log(userGrowthData)
  if (loadingUserGrowth) return(
    <div className='w-full border rounded-lg h-[340px] flex justify-center items-center'>
      <Spinner />
    </div>
  ) 

  return(
  <div className='h-[340px] bg-gradient-to-b from-indigo-50 to-white flex flex-col border-2 rounded-lg p-2 shadow-sm'>
    <h1 className="text-base font-medium mb-3">User Growth</h1>
    <div className='grow'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={userGrowthData}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
          <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
)
}
export default UserGrowthChart;
