import {createContext,useState } from 'react';
import TextField from '@mui/material/TextField';
import ResultTableComponent from './ResultTableComponent'
import ReservasionDetailsComponent from './ReservasionDetailsComponent';

// SERVICES
// import useReservationFetch from '../dataHooks/useFetch';
// TYPES
import {ReservationTypeDetails} from '../types/ReservationTyps';
// 
import {ReservationContextProvider} from '../customContextsProviders/ReservationContext';
// export const  ReservationUserContext = createContext(null);
export const  ReservationUserContext = createContext<Array<ReservationTypeDetails> | null>([]);

const ReservationComponent: React.FC = () =>{
    //  const {data, loading, error} = useReservationFetch('/data/reservations.json')

    //  if(loading) return <h1>Loading</h1>;
     
    //  if(error) {
    //     console.log(error);
    //     return <h1>Error, Data hasn't Loaded....</h1>;
    //  }
    
    // console.log(data);

    const [searchKeyWord,setSeatchKeyWord] = useState("");

    return (
        <ReservationContextProvider>
            <div>
                <TextField id="standard-basic" onChange={e => setSeatchKeyWord(e.target.value)} label="Search" variant="standard" />
                <ResultTableComponent filter={searchKeyWord}></ResultTableComponent>
                {/* <div className="">
                <ReservasionDetailsComponent></ReservasionDetailsComponent>
                </div>*/}
            </div>
        </ReservationContextProvider>
        // <ReservationUserContext.Provider value={data}>
     
        // </ReservationUserContext.Provider>
    )
        
       
   
}

export default ReservationComponent;