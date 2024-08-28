import React from 'react';
import { useState, useEffect } from 'react';
import { useStreamsData } from '../hooks';
import Spinner from './Spinner'

const DataTable = () => {
  const { streamsData, loadingStreams } = useStreamsData();
  const [data, setData] = useState([]);
  const [filterArtist, setFilterArtist] = useState('');
  const [filterSong, setFilterSong] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleFilter = () => {
    let filteredData = streamsData;
    if (filterArtist) {
      filteredData = filteredData.filter((row) => row.artist.toLowerCase().includes(filterArtist.toLowerCase()));
    }
    if (filterSong) {
      filteredData = filteredData.filter((row) => row.song.toLowerCase().includes(filterSong.toLowerCase()));
    }
    setData(filteredData);
  };

  const handleSort = (key) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return sortOrder === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortKey(key);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  useEffect(() => {
    setData(streamsData);
  }, [streamsData]);

  if (loadingStreams) return(
    <div className='w-full border rounded-lg h-[100px] flex justify-center items-center'>
      <Spinner />
    </div>
  ) 
  
  return (
    <div className=''>
      <div className="flex flex-col md:flex-row md:justify-end gap-2 py-2">
        <input
          type="text"
          placeholder="Filter by Artist"
          className='border-2 rounded-lg px-2 py-1 focus:outline-none'
          value={filterArtist}
          onChange={(e) => setFilterArtist(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Song"
          value={filterSong}
          className='border-2 rounded-lg px-2 py-1 focus:outline-none'
          onChange={(e) => setFilterSong(e.target.value)}
        />
        <button 
          onClick={handleFilter}
          className='bg-indigo-500 hover:bg-indigo-700 text-white px-5 py-1 rounded-lg'>
          Filter
        </button>
      </div>
      <div className='overflow-x-auto'>
        <table className='border-0 overflow-x-auto'>
          <thead className='border-0'>
            <tr className='rounded-lg'>
              <th className='bg-indigo-500 font-medium text-white border-0 border-r rounded-tl-lg'>Song Name</th>
              <th className='bg-indigo-500 font-medium text-white border-0 border-r'>Artist</th>
              <th onClick={() => handleSort('date')}
                className='bg-indigo-500 font-medium text-white border-0 border-r'>
                  Date Streamed {sortKey === 'date' ? (sortOrder === 'asc' ? '↑' : '↓') : '↑↓'}
                </th>
              <th onClick={() => handleSort('streams')}
                className='bg-indigo-500 font-medium text-white border-0 border-r'>
                  Stream Count {sortKey === 'streams' ? (sortOrder === 'asc' ? '↑' : '↓') : '↑↓'}
              </th>
              <th className='bg-indigo-500 font-medium text-white border-0 border-r rounded-tr-lg'>User ID</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((row, index) => (
              <tr key={index} className={`${index === data.length - 1 ? 'rounded-b-lg' : ''}`}>
                <td className={`${index === data.length - 1 ? 'rounded-bl-lg' : ''} bg-white`}>{row.song}</td>
                <td className='bg-white'>{row.artist}</td>
                <td className='bg-white'>{row.date}</td>
                <td className='bg-white'>{row.streams}</td>
                <td className={`${true ? 'rounded-br-lg' : ''} bg-white`}>{row.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTable;
