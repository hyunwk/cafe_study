import React from 'react';
import Map from '../api/Map';
const App = class extends React.Component {
  render() {
    return (
      <>
        <h1>Kakao map for cafe</h1>
        <Map />
      </>
    );
  }
};

export default App;
