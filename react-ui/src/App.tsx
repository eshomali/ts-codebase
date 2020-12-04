import React from 'react';
import logo from './logo.svg';
import './App.css';

import {TextField} from "./TextField";

interface Props {

}

const App: React.FC = () => {
  return <div>
      <TextField text='hello' person={{firstName: 'bob', lastName: 'francis'}} />
    </div>;
};

export default App;
