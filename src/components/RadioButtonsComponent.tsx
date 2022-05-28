import * as React from 'react';
import FormControlLabel, {
    FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';


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

type Props = { options: Array<object>, selectedValue: string };
const RadioButtonsComponent: React.FC<Props> = (props) => {
    return (
        <RadioGroup row name="use-radio-group" defaultValue={props.selectedValue}>
          {props.options.map((option:any) => (
                <MyFormControlLabel key={option.key} value={option.key} label={option.value} control={<Radio />} />
            ))
          }
        </RadioGroup>
    )
}
export default RadioButtonsComponent;