import React, { Component } from 'React';
import ReactDOM from 'react-dom';

import InputText from '../components/InputText';
import InputNumeric from '../components/InputNumeric';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Examples</h1>

        <h2>Input Text</h2>
        <InputText />

        <h2>Input Numeric</h2>
        <InputNumeric />

      </div>
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
