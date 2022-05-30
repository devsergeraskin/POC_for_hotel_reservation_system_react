/**
 * I know this is not perfict unit testing, but it is my first time to use Jest and React.
 * It is my first day of using it :), I will be better with a pracitce :).
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen,fireEvent } from '@testing-library/react';
import {ReservationMook} from './mocks/ReservationMook.mook';
import ResultTableComponent from '../ResultTableComponent';
import { ReservationContextState,  } from '../../customContextsProviders/ReservationContext';

const mockData = ReservationMook;
const customRender = (ui, {reservation,setReservation}) => {
    return render(
        <ReservationContextState.Provider value={{reservation,setReservation}}>{ui}</ReservationContextState.Provider>
    )
  }

describe("<ReservasionDetailsComponent/> Open module >  fill all the fields with data",() => {
    it("Open module > fill all the inputes and fields with data",() => {
        let reservation = {
            reservation:{
                reservations:mockData,
                selectedReservatio:{},
                page:0
            },
            setReservation:(comingReservation) =>{ 
                reservation.reservation.selectedReservatio = mockData[0];
            }
        };
        customRender(<ResultTableComponent  filter=''/>, reservation)
        const table = screen.getByTestId("reservationResultTableTbody");
        fireEvent.doubleClick(table.rows[0])
        const module = screen.getByTestId("reservationResultDetailsModule");
        expect(module).toBeTruthy();
    })
})
