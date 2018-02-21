
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

class Example extends React.Component {
  download() {
    // fake server request, getting the file url as response
    setTimeout(() => {
      const response = {
        file: '',
      };
      // server sent the url to the file!
      // now, let's download:
      window.location.href = response.file;
      // you could also do:
      // window.open(response.file);
    }, 100);
  }
  render() {
    return(
      <RaisedButton label="Primary" primary={true} onClick={this.download} />
    );
  }
}

export default Example;
