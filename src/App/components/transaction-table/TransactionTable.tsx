// @flow
import * as React from 'react';
import {KEY_LAST_STATE} from "../../utils/Constants";
import {csvToObject} from "../../utils/CsvUtils";
import './TransactionTable.css'

export type FileEntity = {
    name: string;
    content: string;
}

type Transaction = {
    type: string;
    product: string;
    startedDate: string;
    completedDate: string;
    description: string;
    amount: string;
    fee: string;
    currency: string;
    state: string;
    balance: string;
}

type Props = {};

type State = {
    transactions: Transaction[]
};

export class TransactionTable extends React.Component<Props, State> {

    componentDidMount() {
        const lastState = localStorage.getItem(KEY_LAST_STATE)
        if (lastState) {
            const fileEntity: FileEntity = JSON.parse(lastState)
            this.setState({transactions: csvToObject(fileEntity.content)})
        }
    }

    private rowClass = (amount: number) => {
        if (amount > 0) {
            return "Amount-Income"
        } else {
            return "Amount-Expense"
        }
    }

    private tableHeader = () =>
        <tr>
            <th className={"Header"}>Date</th>
            <th className={"Header"}>Description</th>
            <th className={"Header Data-Amount"}>Amount</th>
            <th className={"Header Data-Amount"}>Balance</th>
        </tr>

    private row = (transaction: Transaction, index: number) =>
        <tr key={`tr${index}`} className={`Row`}>
            <td>{transaction.startedDate}</td>
            <td>{transaction.description}</td>
            <td className={`Data-Amount ${this.rowClass(Number(transaction.amount))}`}>{transaction.amount}</td>
            <td className={"Data-Amount"}>{transaction.balance}</td>
        </tr>

    render() {
        return this.state && (
            <table className={"Table"}>
                {this.tableHeader()}
                {this.state.transactions
                    .map((transaction, index) =>
                        this.row(transaction, index))
                }
            </table>
        );
    };


}