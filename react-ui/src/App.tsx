import React from 'react';
import './App.css';

import {Header} from "./structure/Header";
import {Body} from "./structure/Body";
import {Container} from '@material-ui/core';
//import {TextField} from "./TextField";

interface Props {

}

const App: React.FC = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Header />
        <Body />
      </Container>
    </div>
  );
};

export default App;
