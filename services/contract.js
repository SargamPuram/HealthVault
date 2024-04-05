import web3 from './web3';
import HealthRecordsContract from './contracts/HealthRecords.json';
import dotenv from 'dotenv';

dotenv.config();

let contractInstance;

export const getContract = () => {
  // Initialize contract instance
  contractInstance = new web3.eth.Contract(
    HealthRecordsContract.abi,
    process.env.CONTRACT_ADDRESS
  );
};

export const addRecord = async (patientAddress, data) => {
  await contractInstance.methods.addRecord(patientAddress, data).send({ from: process.env.YOUR_METAMASK_ADDRESS }); // Replace with your MetaMask address
};

export const getRecordsByPatient = async (patientAddress) => {
  try {
    // Call the contract method to retrieve records for a specific patient
    const records = await contractInstance.methods.getRecordsByPatient(patientAddress).call();
    return records;
  } catch (error) {
    console.error("Error fetching records:", error);
    return [];
  }
};

export const updateRecord = async (recordId, newData) => {
  try {
    // Call the contract method to update a record
    await contractInstance.methods.updateRecord(recordId, newData).send({ from: process.env.YOUR_METAMASK_ADDRESS });
    console.log("Record updated successfully.");
  } catch (error) {
    console.error("Error updating record:", error);
  }
};

export const deleteRecord = async (recordId) => {
  try {
    // Call the contract method to delete a record
    await contractInstance.methods.deleteRecord(recordId).send({ from: process.env.YOUR_METAMASK_ADDRESS });
    console.log("Record deleted successfully.");
  } catch (error) {
    console.error("Error deleting record:", error);
  }
};
