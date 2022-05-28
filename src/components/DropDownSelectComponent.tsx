import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
type Props = { options: Array<object>, selectedValue: string };
const DropDownSelectComponent:React.FC<Props> = (props:any) =>{
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value);
    };
    return (
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,  width: '100%'}}>
          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
}

export default DropDownSelectComponent;
