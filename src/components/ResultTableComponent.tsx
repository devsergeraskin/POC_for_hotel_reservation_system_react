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



interface Props {
    filter: string;
}
const ResultTableComponent:React.FC<Props> = (props) =>{
    const { filter } = props;
    // contex
    const contex = useReservationContextState(); 
    const {reservation,setReservation} = contex; 

     // modal
     const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);


    useEffect(() => {
    }, [contex]);


    const searchFilter = (keyWord:string) =>{
      const pattrn = RegExp(keyWord,'igm');
      if(!keyWord)
        return reservation.reservations;
      else
        return reservation.reservations.filter((elem:ReservationTypeDetails) => {
          const stringy = JSON.stringify(elem);
          return pattrn.test(stringy);
        });
    }

    const onDoubleClick = (e:any,reservation:ReservationTypeDetails) =>{
      handleOpen();
      contex.setReservation((previousState:any) =>{
        return { ...previousState, selectedReservatio: reservation }
      });
    }

  return  (
      <div>
        <TableContainer component={Paper} data-testid="reservationResultTableContainer">
              <Table sx={{ minWidth: 650 }} data-testid="reservationResultTable" aria-label="simple table">
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
                <TableBody data-testid="reservationResultTableTbody">
                  {searchFilter(filter).map((reservation:ReservationTypeDetails) => (
                    <TableRow hover onDoubleClick = {(e)=> onDoubleClick(e,reservation)}
                      key={reservation.email}
                      style={{
                        cursor: 'pointer',
                      }}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                      <TableCell  component="th" scope="row">
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
                  aria-describedby="modal-modal-description">
                  <Box sx={style} data-testid="reservationResultDetailsModule">
                    <ReservasionDetailsComponent  ></ReservasionDetailsComponent>
                  </Box>
              </Modal>
      </div>
  );
}


// module style
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  height: '100%',
  transform: 'translate(-50%, -50%)',
  width: '85%',
  maxWidth:'1200px',
  overflow: 'scroll',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default ResultTableComponent