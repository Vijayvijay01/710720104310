import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://104.211.219.98/numbers/primes'; 

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    fetchNumbers();
  }, []);

  const fetchNumbers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/numbers`);
      setNumbers(response.data);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  const addNumber = async () => {
    try {
      await axios.post(`${API_BASE_URL}/numbers`, { number: newNumber });
      setNewNumber('');
      fetchNumbers();
    } catch (error) {
      console.error('Error adding number:', error);
    }
  };

  return (
    <div>
      <h1>Number Management Microservice</h1>
      <input
        type="text"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
        placeholder="Enter a number"
        required
      />
      <button onClick={addNumber}>Add Number</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};
<Number>[2,3,5,7,11,13]</Number>
