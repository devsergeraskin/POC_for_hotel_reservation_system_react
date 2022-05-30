import {useState } from 'react';
import TextField from '@mui/material/TextField';
import ResultTableComponent from './ResultTableComponent'
import {ReservationContextProvider} from '../customContextsProviders/ReservationContext';

const ReservationComponent: React.FC = () =>{
    const [searchKeyWord,setSeatchKeyWord] = useState("");
    return (
        <ReservationContextProvider  data-testid="reservetionPrpvoder">
            <div data-testid="reservationWrapper">
                <TextField data-testid="reservationSearchInput" id="standard-basic" onChange={e => setSeatchKeyWord(e.target.value)} label="Search" variant="standard" />
                <ResultTableComponent filter={searchKeyWord}></ResultTableComponent>
            </div>
        </ReservationContextProvider>
    )
}

export default ReservationComponent;