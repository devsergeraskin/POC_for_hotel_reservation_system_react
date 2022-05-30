/**
 * I know this is not perfict unit testing, but it is my first time to use Jest and React.
 * It is my first day of using it :), I will be better with a pracitce :).
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ReservationContextState,  } from '../../customContextsProviders/ReservationContext';
import {stateContexTypeUseState,ReservationTypeDetails} from '../../types/ReservationTyps'
import {ReservationMook} from './mocks/ReservationMook.mook';
import ResultTableComponent from '../ResultTableComponent';

const mockData:Array<ReservationTypeDetails> = ReservationMook;

const customRender = (ui:JSX.Element, context:stateContexTypeUseState) => {
    return render(
        <ReservationContextState.Provider value={context}>{ui}</ReservationContextState.Provider>
    )}
describe('<ReservationContext/>', () => {
    const reservation:stateContexTypeUseState = {
        reservation:{
            reservations:mockData,
            selectedReservatio:{},
            page:0
        },
        setReservation:(reservation) =>{
            reservation.selectedReservatio = reservation
        }
    };

    it('ReservationContextState.Provider + useUserContextState', () => {
        customRender(<ResultTableComponent filter=''/>, reservation)   
        const table = screen.getByTestId("reservationResultTableTbody");
        expect(table).toBeTruthy();
        expect(table.rows.length).toBe(2);
    });
})
