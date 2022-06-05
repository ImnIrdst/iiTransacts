// @flow
import * as React from 'react';
import {UploadButton} from "../../components/upload-file-button/UploadButton";
import {TransactionTable} from "../../components/transaction-table/TransactionTable";

type Props = {};
type State = {};

export class RevolutScreen extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <UploadButton/>
        <TransactionTable/>
      </div>
    );
  };
}