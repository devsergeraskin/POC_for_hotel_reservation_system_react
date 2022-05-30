import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


type Props = { 
  setStaet:(key:string, value:string) => void   //pass funciton
  ,options:Array<string>
  ,selectedValue: string
  ,title: string | null
  ,readOnly?:boolean
  ,objectKey:string
};  

const DropDownSelectComponent:React.FC<Props> = (props) =>{
    const { setStaet, options, selectedValue, title, readOnly, objectKey} = props;

    const handleChange = (event: SelectChangeEvent) => {
      if(!readOnly){
        setStaet(objectKey ,event.target.value);
      }
    };
  
    return (
      <div>
        <FormControl  data-testid="dropDownSelectComponent" variant="standard" sx={{ m: 1, minWidth: 100 ,  width: '100%'}}>
          <InputLabel id="demo-simple-select-standard-label">{title}</InputLabel>
          <Select 
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            defaultValue={selectedValue}
            value={selectedValue || options[0] }
            onChange={handleChange}
            label={title}
          >
            {
              options.map((option,index) =>{
               return  <MenuItem key={option} value={option}> {option}</MenuItem>
              })
            }
          </Select>
        </FormControl>
      </div>
    );
}

export default DropDownSelectComponent;
