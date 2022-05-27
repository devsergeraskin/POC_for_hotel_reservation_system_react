import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';

interface ReservationTypeDetails {
    stay: {
        arrivalDate: string,
        departureDate: string
    },
    room: {
        roomSize: string,
        roomQuantity: number
    },
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    addressStreet: {
        streetName: string,
        streetNumber: string
    },
    addressLocation: {
        zipCode: string,
        state: string,
        city: string
    },
    extras: Array<string>
    payment: string,
    note: string,
    tags:Array<string>,
    reminder: false,
    newsletter: false,
    confirm: false
     
};

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



const ReservasionDetailsComponent:React.FC = () => {
    const [value, setValue] = React.useState<Date | null>(new Date());
    const [reservationDetails, setReservationDetails] = React.useState<ReservationTypeDetails>(ReservationTypeDetailsState)
    console.log(reservationDetails);
    console.log(new Date("2021-11-18T05:00:00.000Z"));
    useEffect(() => {    // Update the document title using the browser API   
        setValue(new Date("2021-11-19T05:00:00.000Z"));
            
    },[]);
       
  return (
    <div>
 <LocalizationProvider dateAdapter={AdapterDateFns}>
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
    </LocalizationProvider>

    </div>
   
  )
}


export default ReservasionDetailsComponent;
