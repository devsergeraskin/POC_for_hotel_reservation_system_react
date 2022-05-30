import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import ReservationComponent from '../ReservationComponent';


describe("<ReservationComponent/>",() => {
     beforeEach(() => {
        console.log("RUNNING BEFORE EACH TEST");
      });


      describe("when page is initialized", () => {

        it("find search input",()=>{
            render(<ReservationComponent/>)
            const srachInput = screen.getByTestId("reservationSearchInput");
            expect(srachInput).toBeTruthy();
        })

        it("find resultTable",()=>{
            render(<ReservationComponent/>)
            const resultTable = screen.getByTestId("reservationResultTableContainer");
            expect(resultTable).toBeTruthy();
        })
      });
})
