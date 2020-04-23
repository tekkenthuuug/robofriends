import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header.js';

it('renders Header component', () => {
	expect(shallow(<Header />)).toMatchSnapshot();
});
