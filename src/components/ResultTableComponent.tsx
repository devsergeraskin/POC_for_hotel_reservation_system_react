import {useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// TYPES
import {ReservationTypeDetails} from '../types/ReservationTyps';

import {useReservationContextState} from '../customContextsProviders/ReservationContext';



function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  
interface Props {
    filter: string;
}
const ResultTableComponent:React.FC<Props> = (props) =>{
    const { filter } = props;
    const [reservations,setReservation] = useState<Array<ReservationTypeDetails> | [] >([]);
    const contex = useReservationContextState(); 

    // const [test,setTest] = useState(1);

    useEffect(() => {
        if(!contex) 
            setReservation([])
        else
        setReservation(contex)
        // searchFilter(filter);
        console.log(contex);
    }, [contex]);


    const searchFilter = (keyWord:string) =>{
      const pattrn = RegExp(keyWord,'igm');
      if(!keyWord)
        return reservations;
      else
        return reservations.filter((elem) => {
          const stringy = JSON.stringify(elem);
          return pattrn.test(stringy);
        });
    }


    const onSelectAllClick = (e: any) =>{
      console.log(e);
    }

    // const addelement = () => {
    //     let result = [];
    //     for(let i= 0 ; i <test; i++ ){
    //         result.push(<h1 key={i}> {test}</h1>);
    //     }
    //       return result
    // }
   
    // console.log(filter);


  return  (
    //   <div>
    //       {addelement()}
    //       <button  onClick={() => setTest(prev => prev + 1 )}>sada</button>
    //   </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> First Name  </TableCell>
            <TableCell> Last Name   </TableCell>
            <TableCell> Email       </TableCell>
            <TableCell> Phone       </TableCell>
            <TableCell> Confirm     </TableCell>
            <TableCell> Payment     </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchFilter(filter).map((reservation) => (
            <TableRow hover  onDoubleClick={onSelectAllClick}
              key={reservation.email}
              style={{
                cursor: 'pointer',
              }}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell component="th" scope="row">{reservation.firstName}</TableCell>
              <TableCell component="th" scope="row">{reservation.lastName}</TableCell>
              <TableCell >{reservation.email}</TableCell>
              <TableCell >{reservation.phone}</TableCell>
              <TableCell >{reservation.confirm? "yes" : " No"}</TableCell>
              <TableCell >{reservation.payment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ResultTableComponent