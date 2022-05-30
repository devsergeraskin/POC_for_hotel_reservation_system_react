/**
 * I know this is not perfict unit testing, but it is my first time to use Jest and React.
 * It is my first day of using it :), I will be better with a pracitce :).
 */
import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResultTableComponent from '../ResultTableComponent';
import {ReservationContextState} from '../../customContextsProviders/ReservationContext';

import {ReservationMook} from './mocks/ReservationMook.mook';

const mockData = ReservationMook;
const customRender = (ui, {reservation,setReservation}) => {
    return render(
        <ReservationContextState.Provider value={{reservation,setReservation}}>{ui}</ReservationContextState.Provider>
    )
  }

describe("<ResultTableComponent/>",() => {
	describe("Checking Search input field and data in table",() => {
			const reservation = {
				reservation:{
					reservations:mockData,
					selectedReservatio:{},
					page:0
				},
				setReservation:(reservation) =>{
					reservation.selectedReservatio = reservation
				}
			};
		
		it("no keyword has been passed in the search box, expected 2 data rows",()=>{ 
			customRender(<ResultTableComponent filter=''/>, reservation)   
			const table = screen.getByTestId("reservationResultTableTbody");
			expect(table).toBeTruthy();
			expect(table.rows.length).toBe(2);
	
		})

		it("no keyword has been passed in the search box, expected 0 data rows",() => {
			customRender(<ResultTableComponent  filter='abcdertoedwdsadasdasdas'/>, reservation)
			const table = screen.getByTestId("reservationResultTableTbody");
			expect(table).toBeTruthy();
			expect(table.rows.length).toBe(0);
		})

		it("double clikc on the row > open module",() => {
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
})
