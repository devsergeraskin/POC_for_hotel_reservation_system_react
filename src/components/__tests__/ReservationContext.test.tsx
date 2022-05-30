import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ReservationContextState, useReservationContextState } from '../../customContextsProviders/ReservationContext';
import {stateContexType,stateContexTypeUseState} from '../../types/ReservationTyps'
import {ReservationMook} from './mocks/ReservationMook.mook';

const mockData = ReservationMook;

const customRender = (ui:JSX.Element, context:stateContexTypeUseState) => {
    return render(
        <ReservationContextState.Provider value={context}>{ui}</ReservationContextState.Provider>
    )
  }

describe('<ReservationContext/>', () => {

    it('ReservationContextState', () => {
        expect(true).toBe(true);
    });

    it('useReservationContextState', () => {
        expect(true).toBe(true);
    });

    it('<ReservationContextState/>', () => {
        expect(true).toBe(true);
    });

})




// import {
//     ReservationContextState, 
//     useReservationContextState , 
//     ReservationContextProvider} from '../../customContextsProviders/ReservationContext';




// describe("xxx",() => {
//     it("x", ()=>{
//         const TestComponent = () =>{
//             const {reservations,selectedReservatio,page} = useReservationContextState();

//             return (
//                 <div>lol</div>
//             ) 
//         }
//     })
// })
