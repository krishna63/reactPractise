import jest from 'jest';
import '@testing-library/jest-dom';
import * as React from 'react';
import {render, fireEvent, screen} from '@testing-library/react' 
import SideNavigator from '../SideNavigator';
import { doc } from 'prettier';

describe('side navigator component tests', function() {
    it('should render sidenavigator component correctly', function() {
        const firstItem = 'First side item';
        const sideNavItems = [
            {id: 'first', dName: firstItem},
            {id: 'second', dName: 'Second Link'},
        ]
        render(<SideNavigator listItems={sideNavItems} />);

        expect(screen.queryByText(firstItem)).not.toBeNull();

        expect(document.querySelectorAll('.side_item').length).toBe(sideNavItems.length);

    });

    it('should not render the list if the list items is an empty arry', function() {
        render(<SideNavigator listItems={[]}/>);

        expect(document.getElementsByTagName('ul').length).toBe(0)
    })
})