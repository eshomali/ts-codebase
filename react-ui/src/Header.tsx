import React from 'react';
import { Button } from '@material-ui/core';


interface Props {

}

export const Header: React.FC = () => {
  return (
    <div>
        <Button className="btn1" color="primary">Hello Universe</Button>
    </div>
  );
};
