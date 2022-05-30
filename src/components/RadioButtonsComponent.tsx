import React, {useEffect, useState} from 'react';
import FormControlLabel, {
    FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import Alert from '@mui/material/Alert';


interface StyledFormControlLabelProps extends FormControlLabelProps {
    checked: boolean;
}
  
const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
    <FormControlLabel {...props} />
  ))(({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.primary.main,
    },
}));


function MyFormControlLabel(props: FormControlLabelProps) {
    const radioGroup = useRadioGroup();
  
    let checked = false;
  
    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
  
    return <StyledFormControlLabel checked={checked} {...props} />;
  }


type keyValue = {
  [key:string]:any,
}

type Props = { 
   options: Array<object>,
   selectedValue: string 
   onChange:(key:string, value:any) => void,
   objectKey:string
}

const RadioButtonsComponent: React.FC<Props> = (props) => {
    const {options, selectedValue, onChange, objectKey} = props
    const [currentValue, setCarrentValue] = useState(selectedValue);
    const [isKeyFound, setKeyFound] = useState(false)
   
      // Validation
    useEffect(()=>{
        if(!options.filter((option:keyValue) =>{ return option.key === selectedValue }).length){
          setKeyFound(false);
        }else{
          setKeyFound(true);
        }
    },[]);

    
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setKeyFound(true);
      onChange(objectKey, value);
    };


    return (
      <div>
          <RadioGroup row name="use-radio-group" 
          data-testid="radioButtonsComponent"
          defaultValue={currentValue}
          >
            { options.map((option:any,index) => (
                  <MyFormControlLabel   key={option.key} value={option.key} label={option.value} 
                  control={<Radio  data-testid={"radioButtonsselection-" + index}  onChange={handleChange}/>} />
              ))
            }
          </RadioGroup>
          {
            !isKeyFound?<Alert severity="error">No Selection</Alert>:''
          }
          

      </div>
       
    )
}
export default RadioButtonsComponent;