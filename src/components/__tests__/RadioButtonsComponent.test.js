
/**
 * I know this is not perfict unit testing, but it is my first time to use Jest and React.
 * It is my first day of using it :), I will be better with a pracitce :).
 */
import React from 'react';
import '@testing-library/jest-dom'
import { render, screen,fireEvent } from '@testing-library/react';
// import ReservationComponent from '../ReservationComponent';
import RadioButtonsComponent from '../RadioButtonsComponent';

const PAYMENT_OPTIONS = [
    {key:"creditCard",value:"Credit Card"},
    {key:"payPal",value:"Pay Pal"},
    {key:"cash",value:"Cash"},
    {key:"bitCoin",value:"Bit Coin"}
]

describe("<RadioButtonsComponent/>, Select radio button",() => {
        it("Selecting radio button option",()=>{
            let isSelected = false;
            const params = {
                options:PAYMENT_OPTIONS,
                selectedValue:'creditCard',
                objectKey:'payment',
                onChange:(key,value)=>{
                    isSelected = true;
                }
            }
       
            //render elm
            render(<RadioButtonsComponent
                 options={params.options} 
                 selectedValue={params.selectedValue} 
                 objectKey={params.objectKey}
                 onChange={params.onChange}
                 />)
         

            const radioButtonsComponent = screen.getByTestId("radioButtonsComponent");
            expect(radioButtonsComponent).toBeTruthy();
            const creditCardElm = screen.getByText("Credit Card");
            expect(creditCardElm).toBeTruthy();
            // console.log(screen.getByTestId("radioButtonsselection-0"))

            //select radio buttn
            fireEvent.click(screen.getByTestId("radioButtonsselection-2"));
            expect(isSelected).toBeTruthy();
        })
})
