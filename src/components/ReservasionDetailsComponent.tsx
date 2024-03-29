import  { useState} from 'react';
// DAte Picker
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// Grid
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
//UI Components
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';


//CUSTOM COMPONENTS
import DropDownSelectComponent from './DropDownSelectComponent';
import RadioButtonsComponent from './RadioButtonsComponent';
import DeletableChips from './DeletableChipsComponent';

// APP TYPES
import {ReservationTypeDetails} from '../types/ReservationTyps';

//CONTEX
import {useReservationContextState} from '../customContextsProviders/ReservationContext';


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    
}));


const PAYMENT_OPTIONS = [
    {key:"creditCard",value:"Credit Card"},
    {key:"payPal",value:"Pay Pal"},
    {key:"cash",value:"Cash"},
    {key:"bitCoin",value:"Bit Coin"}
]



const ReservasionDetailsComponent:React.FC = () => {
    const contex = useReservationContextState();
    const [reservation, setReservation] = useState<ReservationTypeDetails>(contex.reservation.selectedReservatio)

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setReservation(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // name : is name of the filed of array
    const updateState = (key:string,value:any) => {
        setReservation((prevState:ReservationTypeDetails) => ({
            ...prevState,
            [key]: value
        }));
    };


    const updateDate = (obkectKey:string,valueKey:string,value:any) => {
        const arrivalDate:any = {...reservation.stay, [valueKey]:value}
        setReservation((prevState:ReservationTypeDetails) => ({
            ...prevState,
           [obkectKey]:arrivalDate
        }));
    };

  return (

        <LocalizationProvider dateAdapter={AdapterDateFns}  data-testid="reservasionDetailsComponent" >
            <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        spacing={2}>
                        <Grid item xs={12} direction="row" container justifyContent="flex-start">
                            <Item  elevation={0}>
                                <DatePicker
                                    openTo="day"
                                    views={['year', 'month', 'day']}
                                    label="Date of Arrival"
                                    value={reservation.stay.arrivalDate}
                                    onChange={(newValue) => {
                                        updateDate('stay','arrivalDate',newValue,);
                                    }}
                                    renderInput={(params) => <TextField {...params} helperText={null} />}
                                    /> 
                            </Item>
                            <Item  elevation={0}>
                                <DatePicker
                                    openTo="day"
                                    views={['year', 'month', 'day']}
                                    label="Date of Departure"
                                    value={reservation.stay.departureDate}
                                    onChange={(newValue) => {
                                        updateDate('stay','departureDate',newValue,);
                                    }}
                                    renderInput={(params) => <TextField {...params} helperText={null} />}
                                />
                            </Item>
                        </Grid>
                    
                        <Grid item xs={12} direction="row" container justifyContent="flex-start">
                            <Item  elevation={0}>
                            <TextField defaultValue={reservation.room.roomSize}
                                    id="outlined-helperText"
                                    label="Room Size"
                                    onChange={handleChange}
                                    />
                            </Item>
                            <Item  elevation={0}>
                                <TextField defaultValue={reservation.room.roomQuantity}
                                    id="outlined-helperText"
                                    label="Room Quantity"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    helperText="Maximum:5"
                                    onChange={handleChange}
                                    />
                            </Item>        
                        </Grid>

                        <Grid item xs={12} direction="row" container justifyContent="flex-start">
                            <Item  elevation={0}>
                                <TextField defaultValue={reservation.firstName}
                                    onChange={handleChange}
                                    name="firstName"
                                    id="firstName"
                                    label="First Name"
                                    inputProps={{ maxLength: 25 }}
                                    helperText={reservation.firstName.length + "/25"}
                                    />
                            </Item>
                        </Grid>

                        <Grid item xs={12} direction="row" container justifyContent="flex-start">
                            <Item  elevation={0}>
                                <TextField defaultValue={reservation.lastName}
                                    onChange={handleChange}
                                    name="lastName"
                                    id="lastName"
                                    label="Last Name"
                                    inputProps={{ maxLength: 25 }}
                                    helperText={reservation.lastName.length + "/25"}
                                    />
                            </Item>
                        </Grid>

                        <Grid item xs={12} direction="row" container justifyContent="flex-start">
                            <Item  elevation={0}>
                                <TextField defaultValue={reservation.email}
                                    onChange={handleChange}
                                    type="text"
                                    name="email"
                                    id="email"
                                    label="E-Mail"
                                    inputProps={{inputMode:"email"  }}
                                    />
                            </Item>
                        </Grid>
                        
                        <Grid item xs={12} direction="row" container justifyContent="flex-start">
                            <Item  elevation={0}>
                                <TextField defaultValue={reservation.phone}
                                    onChange={handleChange}
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    label="Phone Number"
                                    inputProps={{ inputMode: "numeric" }}
                                    />
                            </Item>
                        </Grid>

                        <Grid item xs={12} direction="row" container justifyContent="flex-start">
                            <Item  elevation={0}>
                                <TextField defaultValue={reservation.addressStreet.streetName}
                                    onChange={handleChange}
                                    type="text"
                                    name="streetName"
                                    id="streetName"
                                    label="Street Name"
                                    inputProps={{ inputMode: "text" }}
                                    />
                            </Item>
                        </Grid>

                        {/* LOCATION */}
                        <Grid item xs={12} direction="row" container justifyContent="flex-start">
                        <Item  elevation={0}>
                                <TextField defaultValue={reservation.addressLocation.zipCode}
                                    onChange={handleChange}
                                    type="text"
                                    name="zipCode"
                                    id="zipCode"
                                    label="Zip Code"
                                    inputProps={{ inputMode: "text" }}
                                    />
                            </Item>
                            <Item  elevation={0}>
                                <TextField defaultValue={reservation.addressLocation.state}
                                    onChange={handleChange}
                                    type="text"
                                    name="state"
                                    id="state"
                                    label="State"
                                    inputProps={{ inputMode: "text" }}
                                    />
                            </Item>
                            <Item  elevation={0}>
                                <TextField defaultValue={reservation.addressLocation.city}
                                    onChange={handleChange}
                                    type="text"
                                    name="city"
                                    id="city"
                                    label="City"
                                    inputProps={{ inputMode: "text" }}
                                    />
                            </Item>
                        </Grid>

                        <Grid item xs={12} direction="row" container justifyContent="flex-start">
                            <Item  elevation={0}>
                                <DropDownSelectComponent readOnly={true} objectKey={'extras'} title={'Extras'} setStaet={updateState} options={reservation.extras}  selectedValue={''}></DropDownSelectComponent>
                            </Item>
                        </Grid>
                                    
                        <Grid item xs={12} direction="row" container justifyContent="flex-start">
                            <Item  elevation={0}>
                                {/* {produceRadioButtons(PAYMENT_OPTIONS,'cash')} */}
                                <RadioButtonsComponent onChange={updateState} objectKey={"payment"} options={PAYMENT_OPTIONS}  selectedValue={reservation.payment} ></RadioButtonsComponent>
                                {/*@PAYMENT_OPTIONS {key:"cash",value:"Cash"}, */}
                            </Item>
                        </Grid>

                        {/* PERSONAL NOTE */}
                        <Grid item xs={12} direction="row" container justifyContent="flex-start">
                        <Item  elevation={0}>
                                <TextField defaultValue={reservation.note}
                                    onChange={handleChange}
                                    type="text"
                                    name="note"
                                    id="note"
                                    label="Personal Note"
                                    inputProps={{inputMode:"text"  }}
                                    />
                            </Item>
                        </Grid>

                        {/* TAGS*/}
                        <Grid item xs={12} direction="row" container justifyContent="flex-start">
                            <Item  elevation={0}>
                                <DeletableChips  onChange={updateState} objectKey={"tags"}  tags={reservation.tags} ></DeletableChips>
                            </Item>
                        </Grid>
                       
                        <Grid item xs={12} direction="column" container justifyContent="flex-basis">
                            <Item  elevation={0}>
                                <FormGroup>
                                    <FormControlLabel control={<Switch onChange={e => updateState('reminder',!reservation.reminder)} checked={reservation.reminder} />} label="Send Me a remainder" />
                                    <FormControlLabel control={<Switch onChange={e => updateState('newsletter',!reservation.newsletter)} checked={reservation.newsletter} />} label="Subscribe to newsletter" />
                                    <FormControlLabel control={<Checkbox  onChange={e => updateState('confirm',!reservation.confirm)}  checked={reservation.confirm} />} label="I confirm the information given above" />
                                </FormGroup>
                            </Item>
                        </Grid>
                    </Grid> 
            </Box>
        </LocalizationProvider>
   
  )
}


export default ReservasionDetailsComponent;
