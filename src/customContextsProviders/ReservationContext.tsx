import {createContext,useContext,useState,useMemo,useEffect} from 'react'
// SERVICES
// import useReservationFetch from '../dataHooks/useFetch';
import axios from "axios";
import {stateContexType} from '../types/ReservationTyps';


const ReservationContextState = createContext<any>(null);
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
    const [reservation, setReservation] = useState<stateContexType>({
      reservations:[],
      selectedReservatio:{}
    });
    // const [dark, setDark] = useState(false);

    // // fetch a user from a fake backend API
    // const {data, loading, error} = useReservationFetch('/data/reservations.json')

    // //Memo
    const fetchUser = () => {
      console.log('AJAX!')
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


    const memo = useMemo(() =>
       fetchUser(),[]);

    // fetchUser()
    // useEffect(() => {
    //   console.log(reservation)
    //   const fetchUser = () => {
    //     axios.get('/data/reservations.json')
    //     .then((responce)=>{
    //       setReservation(responce.data);
    //     })
    //     .catch((err)=>{
    //     })
    //     .finally(()=>{
    //     })      
    //   };
    //   fetchUser();
    // }, []);
   
    // console.log(reservation)
    //  if(loading) return <h1>Loading</h1>;
     
    //  if(error) {
    //     console.log(error);
    //     return <h1>Error, Data hasn't Loaded....</h1>;
    //  }
    
    // console.log(data);
    // setReservation(data);
    // console.log(reservation);
        

  return (
    // the Provider gives access to the context to its children
    <ReservationContextState.Provider value={{reservation,setReservation}}>
      {children}
      {/* <button onClick={() => setDark(prevDark => !prevDark)}>xxxxxxxxxx</button>
      <h2>{dark?"1":0}</h2> */}
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
