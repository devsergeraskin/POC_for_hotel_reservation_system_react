import React from "react";
import TextField from '@mui/material/TextField';
import ResultTableComponent from './ResultTableComponent'
import ReservasionDetailsComponent from './ReservasionDetailsComponent';
const SearchComponent: React.FC = () =>{
    return (
    <div>
        {/* <TextField id="standard-basic" label="Search" variant="standard" /> */}
        {/* <ResultTableComponent></ResultTableComponent> */}
        <ReservasionDetailsComponent></ReservasionDetailsComponent>
    </div>)
}

export default SearchComponent;