import {createContext,useContext,useState,useMemo} from 'react'
import axios from "axios";
import {stateContexType} from '../types/ReservationTyps';

const ReservationContextState = createContext<any>(null);

// context Reservation hook
const useReservationContextState = () => {
  // get the context
  const context = useContext(ReservationContextState);
  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useUserContextState was used outside of its Provider");
  }
  return context;
};

type Props = {
  children: JSX.Element,
};

const ReservationContextProvider :  React.FC<Props> =  ({children}) => {
    // the value that will be given to the context
    const [reservation, setReservation] = useState<stateContexType>({
      reservations:[],
      selectedReservatio:{},
      page:0
    });
    // const [dark, setDark] = useState(false);

    // // fetch a user from a fake backend API
    // const {data, loading, error} = useReservationFetch('/data/reservations.json')

    // //Memo
    const fetchUser = () => {
      // console.log('AJAX!')
      axios.get('/data/reservations.json',{ headers: {
        'Content-Type': 'application/json',
      }}).then((responce)=>{
        setReservation((prevState:stateContexType) => ({
          ...prevState,
          reservations: responce.data,
      }))
        // setReservation(responce.data);
      })
      .catch((err)=>{

      })
      .finally(()=>{
        
      })      
    };

    useMemo(() =>
       fetchUser(),[reservation.page]);

  return (
    //  This Provider gives access to the context to its children
    <ReservationContextState.Provider value={{reservation,setReservation}}>
      {children}
    </ReservationContextState.Provider>
  );
};

export { ReservationContextState, useReservationContextState , ReservationContextProvider };
