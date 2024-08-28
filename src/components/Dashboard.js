
import React from 'react';
import KeyMetrics from './KeyMetrics';
import UserGrowthChart from './UserGrowthChart';
import RevenueDistributionChart from './RevenueDistributionChart';
import TopStreamedSongsChart from './TopStreamedSongsChart';
import DataTable from './DataTable';
import '../assets/styles.css';


const Dashboard = () => {
    return (
      <div className="space-y-12">
        {/* <h1 className="text-lg font-semibold mb-3">Analytics</h1> */}
        <KeyMetrics />
        <div className="grid lg:grid-cols-3 gap-5">
          <UserGrowthChart />
          <RevenueDistributionChart />
          <TopStreamedSongsChart />
        </div>
        <DataTable />
      </div>
    );
  };
  
  export default Dashboard;