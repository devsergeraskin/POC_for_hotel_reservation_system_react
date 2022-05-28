import  { useContext,useState, useEffect,useMemo } from 'react';

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

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

//CUSTOM COMPONENTS
import DropDownSelectComponent from './DropDownSelectComponent';
import RadioButtonsComponent from './RadioButtonsComponent';
// import DeletableChips from './DeletableChipsComponent';

// APP TYPES
import {ReservationTypeDetails} from '../types/ReservationTyps';

//CONTEX

const ReservationTypeDetailsState:ReservationTypeDetails = {
    "stay": {
        "arrivalDate": "",
        "departureDate": ""
    },
    "room": {
        "roomSize": "",
        "roomQuantity": 0
    },
    "firstName": "",
    "lastName": "",
    "email": "",
    "phone": "",
    "addressStreet": {
        "streetName": "",
        "streetNumber": ""
    },
    "addressLocation": {
        "zipCode": "",
        "state": "",
        "city": ""
    },
    "extras": [
        "extraBreakfast",
        "extraTV",
        "extraWiFi",
        "extraParking",
        "extraBalcony"
    ],
    "payment": "",
    "note": "",
    "tags": [
        "hotel",
        "booking",
        "labtest"
    ],
    "reminder": false,
    "newsletter": false,
    "confirm": false
}

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    
}));


const PAYMENT_OPTIONS = [
    {key:"creditCard",value:"Credit Card"},
    {key:"payPal",value:"Pay Pal"},
    {key:"cash",value:"Cash"},
    {key:"BitCoin",value:"Bit Coin"}
]


const ReservasionDetailsComponent:React.FC = () => {
    const [value, setValue] = useState<Date | null>(new Date());
    const [reservationDetails, setReservationDetails] = useState<ReservationTypeDetails>(ReservationTypeDetailsState)
    // console.log(reservationDetails);
    // console.log(new Date("2021-11-18T05:00:00.000Z"));
    // useEffect(() => {    // Update the document title using the browser API   
    //     setValue(new Date("2021-11-19T05:00:00.000Z"));
            
    // },[]);

    // const test:Array<ReservationTypeDetails> | null = useContext(ReservationUserContext);
    // const contex = useReservationContextState();  
    // console.log(contex)

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setReservationDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

  return (

        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ flexGrow: 1 }}>
                    <Grid
                     container
                     direction="row"
                     justifyContent="flex-start"
                     alignItems="flex-start"
                     spacing={2}
>
                    <Grid item xs={12} direction="row" container justifyContent="flex-start">
                        <Item  elevation={0}>
                            <DatePicker
                                openTo="year"
                                views={['year', 'month', 'day']}
                                label="Date of Arrival"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} helperText={null} />}
                                /> 
                        </Item>
                        <Item  elevation={0}>
                            <DatePicker
                                openTo="year"
                                views={['year', 'month', 'day']}
                                label="Date of Departure"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} helperText={null} />}
                            />
                        </Item>
                    
                    </Grid>

                    <Grid item xs={12} direction="row" container justifyContent="flex-start">
                        <Item  elevation={0}>
                            <DropDownSelectComponent options={PAYMENT_OPTIONS}  selectedValue={'cash'}></DropDownSelectComponent>
                        </Item>
                        <Item  elevation={0}>
                            <TextField
                                id="outlined-helperText"
                                label="Room Quantity"
                                helperText="Maximum:5"
                                />
                        </Item>        
                    </Grid>

                    <Grid item xs={12} direction="row" container justifyContent="flex-start">
                        <Item  elevation={0}>
                            <TextField defaultValue={reservationDetails.firstName}
                                onChange={handleChange}
                                name="firstName"
                                id="firstName"
                                label="First Name"
                                inputProps={{ maxLength: 25 }}
                                helperText={reservationDetails.firstName.length + "/25"}
                                />
                        </Item>
                    </Grid>

                    <Grid item xs={12} direction="row" container justifyContent="flex-start">
                        <Item  elevation={0}>
                            <TextField defaultValue={reservationDetails.lastName}
                                onChange={handleChange}
                                name="lastName"
                                id="lastName"
                                label="Last Name"
                                inputProps={{ maxLength: 25 }}
                                helperText={reservationDetails.lastName.length + "/25"}
                                />
                        </Item>
                    </Grid>

                    <Grid item xs={12} direction="row" container justifyContent="flex-start">
                        <Item  elevation={0}>
                            <TextField defaultValue={reservationDetails.email}
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
                            <TextField defaultValue={reservationDetails.phone}
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
                            <TextField defaultValue={reservationDetails.addressStreet.streetName}
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
                            <TextField defaultValue={reservationDetails.addressLocation.zipCode}
                                onChange={handleChange}
                                type="text"
                                name="zipCode"
                                id="zipCode"
                                label="Zip Code"
                                inputProps={{ inputMode: "text" }}
                                />
                        </Item>
                        <Item  elevation={0}>
                            <TextField defaultValue={reservationDetails.addressLocation.state}
                                onChange={handleChange}
                                type="text"
                                name="state"
                                id="state"
                                label="State"
                                inputProps={{ inputMode: "text" }}
                                />
                        </Item>
                        <Item  elevation={0}>
                            <TextField defaultValue={reservationDetails.addressLocation.city}
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
                            <DropDownSelectComponent options={PAYMENT_OPTIONS}  selectedValue={'cash'}></DropDownSelectComponent>
                        </Item>
                    </Grid>
                 
                    <Grid item xs={12} direction="row" container justifyContent="flex-start">
                        <Item  elevation={0}>
                            {/* {produceRadioButtons(PAYMENT_OPTIONS,'cash')} */}
                            <RadioButtonsComponent options={PAYMENT_OPTIONS}  selectedValue={'cash'} ></RadioButtonsComponent>
                            {/*@PAYMENT_OPTIONS {key:"cash",value:"Cash"}, */}
                        </Item>
                    </Grid>

                       {/* PERSONAL NOTE */}
                    <Grid item xs={12} direction="row" container justifyContent="flex-start">
                       <Item  elevation={0}>
                            <TextField defaultValue={reservationDetails.note}
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
                           {/* <DeletableChips  tags={reservationDetails.tags} ></DeletableChips> */}
                       </Item>
                      
                    </Grid>

                </Grid> 
                </Box>
        </LocalizationProvider>
  
   
  )
}


export default ReservasionDetailsComponent;
