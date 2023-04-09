import { Grid } from '@mui/material';
import { columnColor, textColor } from '../../theme';
import { CustomRow1Item } from '../customs/Row1';
import { useState } from 'react';

const Row1 = ({ mode1, mode2, mode3, mode4, mode5 }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = e => {
    setSelectedValue(e.target.value);
  };

  return (
    <Grid item container color={textColor}>
      {/* 1st row 1st column */}
      <CustomRow1Item
        selectedValue={selectedValue}
        value={mode1}
        handleChange={handleChange}
        bgcolor={columnColor.column1}
      />
      {/* 1st row 2nd column */}
      <CustomRow1Item
        selectedValue={selectedValue}
        value={mode2}
        handleChange={handleChange}
        bgcolor={columnColor.column2}
      />
      {/* 1st row 3rd column */}
      <CustomRow1Item
        selectedValue={selectedValue}
        value={mode3}
        handleChange={handleChange}
        bgcolor={columnColor.column3}
      />
      {/* 1st row 4th column */}
      <CustomRow1Item
        selectedValue={selectedValue}
        value={mode4}
        handleChange={handleChange}
        bgcolor={columnColor.column4}
      />
      {/* 1st row 5th column */}
      <CustomRow1Item
        selectedValue={selectedValue}
        value={mode5}
        handleChange={handleChange}
        bgcolor={columnColor.column5}
      />
    </Grid>
  );
};

export default Row1;
