import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getTransaction } from "../../../helpers/axiosHelper";

const CustomTable = () => {
  const [transaction, setTransaction] = useState([]);
}
  useEffect(() => {fetchTransactions()},[]);


    // call function to call api to fetch all the trancaction

    const fetchTransactions = async () => {
      // lets call axios to fetch all the transactions

      const data = await getTransaction();
      if (data.status === "success") {
        setTransaction(data.result);
      }
    };

  return (
    <div className="mt-5">
      100 transaction found!
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Title</th>
            <th>Expense</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2022</td>
            <td>shopping</td>
            <td>500</td>
            <td></td>
          </tr>
          <tr>
            <td>1</td>
            <td>2022</td>
            <td>shopping</td>
            <td></td>
            <td>
              <span className="bg-success rounded p-1 fw-bold">3000</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CustomTable;
