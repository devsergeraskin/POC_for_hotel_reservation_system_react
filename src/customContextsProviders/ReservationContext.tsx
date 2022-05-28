import {createContext,useContext,useState,useMemo,useEffect} from 'react'
// SERVICES
import useReservationFetch from '../dataHooks/useFetch';
import axios from "axios";

// create context
const ReservationContextState = createContext(null);
// const ReservationContextUpdater = createContext(null);

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


// // context Reservation hook
// const useReservationContextUpdater = () => {
//   // get the context
//   const context = useContext(ReservationContextUpdater);

//   // if `undefined`, throw an error
//   if (context === undefined) {
//     throw new Error("useUserContextState was used outside of its Provider");
//   }

//   return context;
// };
type Props = {
  children: JSX.Element,
};

const ReservationContextProvider :  React.FC<Props> =  ({children}) => {
    // the value that will be given to the context
    const [reservation, setReservation] = useState(null);


    // // fetch a user from a fake backend API
    // const {data, loading, error} = useReservationFetch('/data/reservations.json')

    // //Memo
    const memo = useMemo(() =>
      setReservation(reservation),[reservation]
    );

    
    

    useEffect(() => {
      console.log(reservation)
      const fetchUser = () => {
        axios.get('/data/reservations.json')
        .then((responce)=>{
          setReservation(responce.data);
        })
        .catch((err)=>{
        })
        .finally(()=>{
        })      
      };
      fetchUser();
    }, []);
   
    // console.log(reservation)
    //  if(loading) return <h1>Loading</h1>;
     
    //  if(error) {
    //     console.log(error);
    //     return <h1>Error, Data hasn't Loaded....</h1>;
    //  }
    
    // console.log(data);
    // setReservation(data);
    console.log(reservation);
   

  return (
    // the Provider gives access to the context to its children
    <ReservationContextState.Provider value={reservation}>
      {children}
    </ReservationContextState.Provider>
  );
};


// // context consumer hook
// const useReservationContext = () => {
//   // get the context
//   const context = useContext(UserContext);

//   // if `undefined`, throw an error
//   if (context === undefined) {
//     throw new Error("useUserContext was used outside of its Provider");
//   }

//   return context;
// };



// function xReservationContext() => {
    
//     // const {data, loading, error} = useReservationFetch('/data/reservations.json')
//     // const [state, setState] = useState(null);

//     // setState(data);
    
//     //     // memoize the full context value
//     //     const contextValue = useMemo(() => ({
//     //         user,
//     //         signout
//     //     }), [user, signout])


//   return (
//     <div>
      
//     </div>
//   )
// }

export { ReservationContextState, useReservationContextState , ReservationContextProvider };
