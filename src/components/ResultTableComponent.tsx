import {useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import ReservasionDetailsComponent from './ReservasionDetailsComponent';
import Box from '@mui/material/Box';
// TYPES
import {ReservationTypeDetails} from '../types/ReservationTyps';
// CONTEXT
import {useReservationContextState} from '../customContextsProviders/ReservationContext';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  height: '100%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  overflow: 'scroll',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Props {
    filter: string;
}
const ResultTableComponent:React.FC<Props> = (props) =>{
    const { filter } = props;

    const [reservations,setReservation] =  useState<Array<ReservationTypeDetails>| [] >([]);

    // const [selectedReservation,setSelectedReservation] = 
    // useState<ReservationTypeDetails>();

     // modal
     const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     // contex
    const contex = useReservationContextState(); 
    
   
    useEffect(() => {
        if(!contex.reservation.reservations) 
            setReservation([])
        else
        setReservation(contex.reservation.reservations)
        // searchFilter(filter);
        console.log(contex.reservation.reservations);
    }, [contex.reservation.reservations]);


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

    const onDoubleClick = (e:any,reservation:ReservationTypeDetails) =>{
      handleOpen();
      contex.setReservation((prevState:any) => ({
        ...prevState,
        selectedReservatio: reservation,
      }))
  }
    // console.log(contex);
    // console.log(contex.reservation.selectedReservatio);
    // const addelement = () => {
    //     let result = [];
    //     for(let i= 0 ; i <test; i++ ){
    //         result.push(<h1 key={i}> {test}</h1>);
    //     }
    //       return result
    // }
   
    // console.log(filter);

  return  (
   
      // <div>
      //     {/* {addelement()}
      //     <button  onClick={() => setTest(prev => prev + 1 )}>sada</button> */}
      //       <button  onClick={handleOpen} >sada</button> 
      //          <Modal
      //              open={open}
      //              onClose={(handleClose)}
      //              aria-labelledby="modal-modal-title"
      //              aria-describedby="modal-modal-description"
      //            >
      //              <Box sx={style}>
      //                <ReservasionDetailsComponent></ReservasionDetailsComponent>
      //              </Box>
             
      //          </Modal>
      // </div>
      <div>

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
            <TableRow hover onDoubleClick = {(e)=> onDoubleClick(e,reservation)}
              key={reservation.email}
              style={{
                cursor: 'pointer',
              }}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell component="th" scope="row">
              {reservation.firstName}
              
               
              </TableCell>
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
    <Modal
          open={open}
          onClose={(handleClose)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ReservasionDetailsComponent ></ReservasionDetailsComponent>
          </Box>
      </Modal>
      </div>
  
  );
}




export default ResultTableComponent