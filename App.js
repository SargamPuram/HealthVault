import React, { useState, useEffect } from 'react';
import { getContract, addRecord, getRecordsByPatient } from './services/contract';

function App() {
  const [patientAddress, setPatientAddress] = useState('');
  const [recordData, setRecordData] = useState('');
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Initialize contract instance
    getContract();
  }, []);

  const handleAddRecord = async () => {
    await addRecord(patientAddress, recordData);
    setPatientAddress('');
    setRecordData('');
  };

  const handleGetRecords = async () => {
    const fetchedRecords = await getRecordsByPatient(patientAddress);
    setRecords(fetchedRecords);
  };

  return (
    <div>
      <h1>Health Records DApp</h1>
      <div>
        <label>Patient Address:</label>
        <input type="text" value={patientAddress} onChange={(e) => setPatientAddress(e.target.value)} />
      </div>
      <div>
        <label>Record Data:</label>
        <input type="text" value={recordData} onChange={(e) => setRecordData(e.target.value)} />
      </div>
      <button onClick={handleAddRecord}>Add Record</button>
      <button onClick={handleGetRecords}>Get Records</button>
      <h2>Records:</h2>
      <ul>
        {records.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
