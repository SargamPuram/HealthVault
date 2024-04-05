# HealthVault
A decentralized health records management DApp leveraging Ethereum smart contracts and Tableland for secure, transparent, and collaborative data storage.

# Decentralized Health Records DApp

## Overview

This project is a Decentralized Application (DApp) designed to manage health records using blockchain technology. It allows users to securely store and access health records in a decentralized manner. This DApp leverages smart contracts to ensure data integrity and immutability while providing transparency and security to users.

## Motivation

The motivation behind this project is to address the challenges associated with traditional health record management systems. Traditional systems often suffer from issues such as lack of interoperability, centralized control, privacy concerns, and security vulnerabilities. By utilizing blockchain technology, we aim to overcome these challenges and provide a decentralized solution that ensures data integrity, privacy, and security.

## Approach

Our approach involves leveraging blockchain technology, specifically Ethereum smart contracts, to create a decentralized platform for managing health records. The smart contracts serve as the backbone of the system, handling data storage, access control, and transaction processing. Additionally, we utilize Tableland, a decentralized database protocol, to enable open, collaborative datasets within our DApp.

## Solution

The solution consists of the following components:

- **Smart Contracts**: Ethereum smart contracts are used to define the logic for managing health records. These contracts enforce data integrity, access control, and immutability.
- **Frontend Interface**: The frontend interface is built using React.js, providing users with a seamless experience for interacting with the DApp. Users can add, view, and manage their health records through an intuitive user interface.
- **Backend Services**: Backend services handle interactions with the blockchain network and provide additional functionalities such as data validation and authentication.
- **Tableland Integration**: We integrate Tableland, a decentralized database protocol, to enable open, collaborative datasets within our DApp, facilitating data sharing and collaboration among users.

## File Structure

```bash
/
|-- contracts/  # Contracts
|   |-- HealthRecords.sol      #Contains the contracts
|   |-- Migrations.sol
|-- pages
|   |-- Home.js
|   |-- Login.js
|   |-- NotFound.js
|   |-- SignUp.js
|-- src
|   |-- components/               # React components
|   |-- services/                 # Backend services
|   |-- tests/                    # Test files
|-- public/                       # Public assets and HTML file
|   |-- index.html
|-- .env                          # Environment variables (not included in repository)
|-- package.json                  # Project dependencies and scripts
|-- README.md                     # Project documentation


Getting Started
Follow these steps to get the project up and running:

Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/health-records-dapp.git

Install Dependencies:
cd health-records-dapp && npm install
Set Environment Variables:
Create a .env file in the root directory and add necessary environment variables.
Start the Development Server:
npm start
Access the DApp:
Open your browser and navigate to http://localhost:3000
Environment Variables
Create a .env file in the root directory and add the following variables:

makefile
Copy code
CONTRACT_ADDRESS=YOUR_CONTRACT_ADDRESS
YOUR_METAMASK_ADDRESS=YOUR_WALLET_ADDRESS
REACT_APP_NETWORK_URL=YOUR_NETWORK_URL
Replace CONTRACT_ADDRESS with the address of your deployed smart contract, YOUR_METAMASK_ADDRESS with the your wallet ADDRESS and YOUR_NETWORK_URL with the URL of your Ethereum network.

