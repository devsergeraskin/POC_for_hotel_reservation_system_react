/**
 * I know this is not perfict unit testing, but it is my first time to use Jest and React.
 * It is my first day of using it :), I will be better with a pracitce :).
 */
import React from 'react';
import '@testing-library/jest-dom'
import { render, screen,fireEvent } from '@testing-library/react';
import DeletableChips from '../DeletableChipsComponent';


describe("<DeletableChipsComponent.test/>, Remove Chip/Tag >",() => {
        it("Remove Chip/Tag",()=>{
            let fakeStateObject = {
                tags:['banana','two','three']
            }
            const objectKey = "tags"

            const onChange = (objectKey,objectValue) =>{
                console.log('NEW VALUE',objectValue)
                fakeStateObject[objectKey] = objectValue;
            }

            //render elm
            render(<DeletableChips tags={fakeStateObject.tags} onChange={onChange} objectKey={objectKey}/>)
            const deletableChipsElm = screen.getByTestId("deletableChips");
            expect(deletableChipsElm).toBeTruthy();
            //get 3 tags 
            let tags = screen.getAllByTestId("CancelIcon");
            expect(tags).toBeTruthy();
            //remove one , expected 2
            fireEvent.click(tags[0]);
            expect(fakeStateObject.tags.length).toBe(2)
        })
     
})
