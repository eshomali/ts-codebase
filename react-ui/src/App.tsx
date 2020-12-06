import React from 'react';
import './App.css';

import {Header} from "./Header";
import {TextField} from "./TextField";

interface Props {

}

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <TextField text="hello"/>
    </div>
  );
};

export default App;
