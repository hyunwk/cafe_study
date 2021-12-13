import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function Enroll() {
  //   const [selected, setSelected] = useState(null);
  const { status, data, error, isFetching } = useQuery('enrolls', async () => {
    const { data } = await axios.get('/api/enrolls');
    return data;
  });
  if (!data) {
    return <p> loading... </p>;
  }
  return (
    <>
      {/* {selected && (
        <ContentModal
          data={data}
          selected={selected}
          setSelected={setSelected}
        />
      )} */}
      {/* {data} */}
      <h2>원본 사이트: 강남초 가정통신문</h2>
    </>
  );
}
