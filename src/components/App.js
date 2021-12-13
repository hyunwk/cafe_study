import React from 'react';
import Map from '../api/Map';
import { QueryClient, QueryClientProvider } from 'react-query';
import Enroll from './Enroll';
const queryClient = new QueryClient();
const App = class extends React.Component {
  render() {
    return (
      <QueryClientProvider client={queryClient}>
        <h1>Kakao map for cafe</h1>
        <Enroll />
        <Map />
      </QueryClientProvider>
    );
  }
};

export default App;
