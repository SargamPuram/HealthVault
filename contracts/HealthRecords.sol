// SPDX-License-Identifier: MIT
pragma solidity >=0.8.10 <0.9.0;

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {ERC721Holder} from "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import {TablelandDeployments} from "@tableland/evm/contracts/utils/TablelandDeployments.sol";
import {SQLHelpers} from "@tableland/evm/contracts/utils/SQLHelpers.sol";

contract HealthRecords is ERC721Holder {
    uint256 private _tableId; // Unique table ID
    string private constant _TABLE_PREFIX = "health_records"; // Custom table prefix

    constructor() {
        // Create a table for health records
        _tableId = TablelandDeployments.get().create(
            address(this),
            SQLHelpers.toCreateFromSchema(
                "record_id integer primary key,"
                "patient_address address,"
                "data text,"
                "timestamp uint",
                _TABLE_PREFIX
            )
        );
    }

    function addRecord(address patientAddress, string memory data) external {
        // Insert a new record into the table
        TablelandDeployments.get().mutate(
            address(this), // Table owner, i.e., this contract
            _tableId,
            SQLHelpers.toInsert(
                _TABLE_PREFIX,
                _tableId,
                "patient_address,data,timestamp",
                string.concat(
                    Strings.toHexString(uint256(patientAddress)), // Convert address to hexadecimal string
                    ",",
                    SQLHelpers.quote(data), // Wrap data in single quotes with the `quote` method
                    ",",
                    Strings.toString(block.timestamp) // Convert timestamp to string
                )
            )
        );
    }

    function getRecordsByPatient(address patientAddress) external view returns (string[] memory) {
        // Construct SQL SELECT statement to retrieve records for a specific patient
        string memory sqlStatement = string.concat(
            "SELECT * FROM ",
            SQLHelpers.toNameFromId(_TABLE_PREFIX, _tableId),
            " WHERE patient_address=",
            Strings.toHexString(uint256(patientAddress))
        );

        // Execute SQL query and retrieve records
        string[] memory records = TablelandDeployments.get().query(address(this), _tableId, sqlStatement);
        return records;
    }

    function updateRecord(uint256 recordId, string memory newData) external {
        // Set the values to update
        string memory setters = string.concat("data=", SQLHelpers.quote(newData));
        // Specify filters for which record to update
        string memory filters = string.concat(
            "record_id=",
            Strings.toString(recordId)
        );
        // Mutate the record with the new data
        TablelandDeployments.get().mutate(
            address(this),
            _tableId,
            SQLHelpers.toUpdate(_TABLE_PREFIX, _tableId, setters, filters)
        );
    }

    function deleteRecord(uint256 recordId) external {
        // Specify filters for which record to delete
        string memory filters = string.concat(
            "record_id=",
            Strings.toString(recordId)
        );
        // Mutate the record to delete it
        TablelandDeployments.get().mutate(
            address(this),
            _tableId,
            SQLHelpers.toDelete(_TABLE_PREFIX, _tableId, filters)
        );
    }

    // Return the table ID
    function getTableId() external view returns (uint256) {
        return _tableId;
    }

    // Return the table name
    function getTableName() external view returns (string memory) {
        return SQLHelpers.toNameFromId(_TABLE_PREFIX, _tableId);
    }
}
