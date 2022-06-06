// @flow
import * as React from 'react';
import {UploadButton} from "../../components/upload-file-button/UploadButton";
import {TransactionTable} from "../../components/transaction-table/TransactionTable";
import './RevolutScreen.css';

type Props = {};
type State = {};

export class RevolutScreen extends React.Component<Props, State> {
  render() {
    return (
      <div className={"Screen"}>
        <UploadButton/>
        <TransactionTable/>
      </div>
    );
  };
}