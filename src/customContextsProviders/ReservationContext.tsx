import {createContext,useContext,useState,useMemo} from 'react'
// SERVICES
import useReservationFetch from '../dataHooks/useFetch';

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

const ReservationContextProvider  = (children:any)  => {
  // the value that will be given to the context
  const [reservation, setReservation] = useState(null);

   // sign out the user, memoized
  //  const signout = useCallback(() => {
  //   setReservation(null);
  // }, []);



  // fetch a user from a fake backend API
  const {data, loading, error} = useReservationFetch('/data/reservations.json')
  console.log(children);
  
    const memo = useMemo(() =>
      setReservation(data),[data]
    );


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

export { ReservationContextState , ReservationContextProvider };
