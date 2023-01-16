import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('path/to/json/file');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
