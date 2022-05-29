import {useEffect, useState} from 'react';
import FormControlLabel, {
    FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
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
type Props = { options: Array<object>, selectedValue: string };
    const RadioButtonsComponent: React.FC<Props> = (props) => {
    const {options, selectedValue} = props
    const [isKeyFound, setisKeyFound] = useState(false)
      
   

    useEffect(()=>{
        if(!options.filter((option:keyValue) =>{ return option.key === selectedValue }).length){
          setisKeyFound(false);
        }else{
          setisKeyFound(true);
        }
    },[]);
  


    return (
      <div>
          <RadioGroup row name="use-radio-group" defaultValue={selectedValue}>
            { options.map((option:any) => (
                  <MyFormControlLabel key={option.key} value={option.key} label={option.value} control={<Radio />} />
              ))
            }
          </RadioGroup>
          {
            !isKeyFound?<Alert severity="error">No Selection Found</Alert>:''
          }
          

      </div>
       
    )
}
export default RadioButtonsComponent;