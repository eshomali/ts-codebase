import React from 'react';
import {Button, Radio, FormLabel, FormControl, FormControlLabel, RadioGroup} from '@material-ui/core';


interface Props {
  value: 1
}

export const Header: React.FC = (Props) => {
  return (
   
    <div>
        <Button className="btn1" color="primary">Hello Universe</Button>
        <FormControl component="fieldset">
  <FormLabel component="legend">Gender</FormLabel>
  <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
  </RadioGroup>
</FormControl>
    </div>
  );
};
