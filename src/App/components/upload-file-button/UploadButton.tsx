// @flow
import * as React from 'react';
import './UploadButton.css';
import {KEY_LAST_STATE} from "../../utils/Constants";
import {FileEntity} from "../transaction-table/TransactionTable";

type Props = {};
type State = {
  selectedFile?: File;
  selectedFileEntity?: FileEntity;
};

export class UploadButton extends React.Component<Props, State> {

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
    localStorage.setItem(KEY_LAST_STATE, JSON.stringify(this.state.selectedFileEntity))
  }

  onFileChange = (event: any) => {
    const selectedFile = event.target.files[0]

    if (selectedFile) {
      this.setState({selectedFile: selectedFile});

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const text = e.target.result;
          if (typeof text === "string") {
            this.setState({
              selectedFileEntity: {
                name: selectedFile.name,
                content: text,
              }
            })
          }
        }
      };
      reader.readAsText(selectedFile);
    }
  };

  render() {
    return (
      <div>
        <div>
          {(!this.state || !this.state.selectedFile) &&
              <div className="Upload-Input">
                  <input type="file" onChange={this.onFileChange}/>
              </div>
          }
        </div>
      </div>
    );
  };
}