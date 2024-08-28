import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserGrowthChart from './UserGrowthChart';
import { DataProvider } from '../context/DataContext';

// Mock data to simulate context values
const mockData = {
  userGrowthData: [
    { month: 'Jan', totalUsers: 12000, activeUsers: 3000 },
    { month: 'Feb', totalUsers: 15000, activeUsers: 4000 },
    { month: 'Mar', totalUsers: 18000, activeUsers: 4500 },
    // Add more data as needed
  ],
  loadingUserGrowth: false,
};

// Custom render function that includes the DataProvider
const renderWithProvider = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <DataProvider value={providerProps}>
      {ui}
    </DataProvider>,
    renderOptions
  );
};

test('renders UserGrowthChart with data', () => {
  const providerProps = {
    userGrowthData: mockData.userGrowthData,
    loadingUserGrowth: mockData.loadingUserGrowth,
  };

  renderWithProvider(<UserGrowthChart />, { providerProps });

  // Check if the chart's X-axis labels (months) are rendered
  expect(screen.getByText('Jan')).toBeInTheDocument();
  expect(screen.getByText('Feb')).toBeInTheDocument();
  expect(screen.getByText('Mar')).toBeInTheDocument();

  // Check if specific lines are rendered in the chart
  // You might not see chart data directly as text,
  // so you'd typically check the existence of chart lines.
  const lines = screen.getAllByRole('img'); // 'img' is the role for SVG elements
  expect(lines).toHaveLength(2); // One line for totalUsers and one for activeUsers
});

test('renders loader when data is loading', () => {
  const providerProps = {
    userGrowthData: [],
    loadingUserGrowth: true,
  };

  renderWithProvider(<UserGrowthChart />, { providerProps });

  // Check if the loader is displayed
  expect(screen.getByText(/loading.../i)).toBeInTheDocument();
});
