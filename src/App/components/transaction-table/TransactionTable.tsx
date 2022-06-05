// @flow
import * as React from 'react';
import {KEY_LAST_STATE} from "../../utils/Constants";
import {csvToObject} from "../../utils/CsvUtils";

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
      console.log(fileEntity)
      this.setState({transactions: csvToObject(fileEntity.content)})
    }
  }

  render() {
    return this.state && (
      <div>
        {this.state.transactions
          .map((row, index) =>
            <p key={index}>{JSON.stringify(row)}</p>)
        }
      </div>
    );
  };
}