/**
 * I know this is not perfict unit testing, but it is my first time to use Jest and React.
 * It is my first day of using it :), I will be better with a pracitce :).
 */
import React from 'react';
import '@testing-library/jest-dom'
import { render, screen,fireEvent } from '@testing-library/react';
import DropDownSelectComponent from '../DropDownSelectComponent';
import {within} from '@testing-library/dom'


describe("<DropDownSelectComponent.test/>, check if 'selectedValue' is displayed as selected in dropdown",() => {
        it("Selecting radio button option",()=>{
            let CheckState = { // NO IN USE DropDownSelectComponent is for rad only.
                fruit:""
            }
            
            const params = {
                options:['banana','apple'],
                selectedValue:'banana',
                title:'test-title',
                readOnly:true,
                objectKey:'fruits',
                onChange:(key,value)=>{  // NO IN USE DropDownSelectComponent is for rad only.
                    CheckState[key] = value;
                }
            }
       
            //render elm
            render(<DropDownSelectComponent
                 options={params.options} 
                 selectedValue={params.selectedValue} 
                 title={params.title}
                 objectKey={params.objectKey}
                 onChange={params.onChange}
             />)
         
            // check if renderd
            const dropDownSelectComponent = screen.getByTestId("dropDownSelectComponent");
            expect(dropDownSelectComponent).toBeTruthy();

            //Banana should be selected
            const selectedCheck = screen.getByDisplayValue("banana");
            expect(selectedCheck).toBeTruthy();

           // check title
            const { getByText } = within(screen.getByTestId("dropDownSelectComponent"))
            expect(getByText(params.title)).toBeInTheDocument()
        })
     
})
