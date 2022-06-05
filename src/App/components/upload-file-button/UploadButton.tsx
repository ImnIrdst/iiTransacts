// @flow
import * as React from 'react';
import './UploadButton.css';
import {KEY_LAST_STATE} from "../../utils/Constants";

type Props = {};
type State = {
  selectedFile?: File;
  selectedFileName?: string;
  fileContent: string;
};

export class UploadButton extends React.Component<Props, State> {
  componentDidMount() {
    const lastState = localStorage.getItem(KEY_LAST_STATE)
    if (lastState) {
      this.setState(JSON.parse(lastState))
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
    localStorage.setItem(KEY_LAST_STATE, JSON.stringify(this.state))
  }

  onFileChange = (event: any) => {
    const selectedFile = event.target.files[0]

    if (selectedFile) {
      this.setState({selectedFile: selectedFile, selectedFileName: selectedFile.name});

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const text = e.target.result;
          if (typeof text === "string") {
            this.setState({fileContent: text})
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