import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";

const KeyMetrics = () => {
  const metrics = {
    totalUsers: 150000,
    activeUsers: 30000,
    totalStreams: 500000,
    revenue: 750000,
    topArtist: 'Arijith Singh'
  };

  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-5">
      <div className="flex flex-col bg-white gap-2 rounded-lg border p-3 shadow-md shadow-indigo-100/50">
        <div className='flex items-center justify-between text-base border-b py-1'>
          <span>
            Total Users
          </span>

          <span>
            <FaUserAlt className='text-indigo-700 text-base' />
          </span>
        </div>

        <span className='py-2 text-lg font-medium'>
          {metrics.totalUsers}
        </span>
      </div>

      <div className="flex flex-col bg-white gap-2 rounded-lg border  p-3 shadow-md shadow-indigo-100/50">
        <div className='flex items-center justify-between text-base border-b py-1'>
          <span>
            Active Users
          </span>

          <span>
            <FaUserClock className='text-indigo-700 text-xl' />
          </span>
        </div>

        <span className='py-2 text-lg font-medium'>
          {metrics.activeUsers}
        </span>
      </div>

      <div className="flex flex-col bg-white gap-2 rounded-lg border p-3 shadow-md shadow-indigo-100/50">
        <div className='flex items-center justify-between text-base border-b py-1'>
          <span>
            Total Streams
          </span>

          <span>
            <SiYoutubemusic className='text-indigo-700 text-xl' />
          </span>
        </div>

        <span className='py-2 text-lg font-medium'>
          {metrics.totalStreams}
        </span>
      </div>

      <div className="flex flex-col bg-white gap-2 rounded-lg border p-3 shadow-md shadow-indigo-100/50">
        <div className='flex items-center justify-between text-base border-b py-1'>
          <span>
            Revenue
          </span>

          <span>
            <FaCircleDollarToSlot className='text-indigo-700 text-xl' />
          </span>
        </div>

        <span className='py-2 text-lg font-medium'>
          ${metrics.revenue}
        </span>
      </div>

      <div className="flex flex-col bg-white gap-2 rounded-lg border-2 border-gray-100 p-3 shadow-md shadow-indigo-100/50">
        <div className='flex items-center justify-between text-base border-b py-1'>
          <span>
            Top Artist
          </span>

          <span>
            <FaUserTie className='text-indigo-700 text-lg' />
          </span>
        </div>

        <span className='py-2 text-lg font-medium'>
          {metrics.topArtist}
        </span>
      </div>
    </div>
  );
};

export default KeyMetrics;
