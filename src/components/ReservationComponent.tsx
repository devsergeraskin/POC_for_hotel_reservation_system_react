import { useContext, createContext } from 'react';
import TextField from '@mui/material/TextField';
import ResultTableComponent from './ResultTableComponent'
import ReservasionDetailsComponent from './ReservasionDetailsComponent';

// SERVICES
import useReservationFetch from '../dataHooks/useFetch';
// SERVICES
import {ReservationTypeDetails} from '../types/ReservationTyps';

// const ReservationTypeDetailsState:ReservationTypeDetails = {
//     "stay": {
//         "arrivalDate": "",
//         "departureDate": ""
//     },
//     "room": {
//         "roomSize": "",
//         "roomQuantity": 0
//     },
//     "firstName": "",
//     "lastName": "",
//     "email": "",
//     "phone": "",
//     "addressStreet": {
//         "streetName": "",
//         "streetNumber": ""
//     },
//     "addressLocation": {
//         "zipCode": "",
//         "state": "",
//         "city": ""
//     },
//     "extras": [
//         "extraBreakfast",
//         "extraTV",
//         "extraWiFi",
//         "extraParking",
//         "extraBalcony"
//     ],
//     "payment": "",
//     "note": "",
//     "tags": [
//         "hotel",
//         "booking",
//         "labtest"
//     ],
//     "reminder": false,
//     "newsletter": false,
//     "confirm": false
// }

// export const  ReservationUserContext = createContext(null);

export const  ReservationUserContext = createContext<Array<ReservationTypeDetails> | null>([]);

const ReservationComponent: React.FC = () =>{
     const {data, loading, error} = useReservationFetch('/data/reservations.json')

     if(loading) return <h1>Loading</h1>;
     
     if(error) {
        console.log(error);
        return <h1>Error, Data hasn't Loaded....</h1>;
     }
    
    // console.log(data);

    return (
        <ReservationUserContext.Provider value={data}>
        <div>
            <TextField id="standard-basic" label="Search" variant="standard" />
            <ResultTableComponent></ResultTableComponent>
            {/* <div className="">
            <ReservasionDetailsComponent></ReservasionDetailsComponent>
            </div>   */}
        </div>
        </ReservationUserContext.Provider>
    )
        
       
   
}

export default ReservationComponent;