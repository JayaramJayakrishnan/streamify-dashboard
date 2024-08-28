import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import { DataProvider } from "./context/DataContext";
const App = () => {
  return (
    <DataProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </DataProvider>
  );
};

export default App;
