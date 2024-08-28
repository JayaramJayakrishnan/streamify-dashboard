import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import { useRevenueData } from '../hooks';
import Spinner from './Spinner'
const RevenueDistributionChart = () => {

  const { revenueData, loadingRevenue } = useRevenueData();

  if (loadingRevenue) return(
    <div className='w-full border rounded-lg h-[340px] flex justify-center items-center'>
      <Spinner />
    </div>
  ) 

  return(
    <div className='h-[340px] bg-gradient-to-t from-indigo-50 to-white flex flex-col border-2 rounded-lg p-2 shadow-sm'>
      <h1 className="text-base font-medium mb-3">Revenue Distribution</h1>
      <div className='grow'>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={revenueData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#4338ca" label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
};

export default RevenueDistributionChart;
