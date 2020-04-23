import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_FAILED,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS
} from './constants';

import * as reducers from './reducers';

describe('searchRobotos', () => {
	const initialStateSearch = {
		searchField : ''
	};
	it('should return the initial state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
	});
	it('should handle CHANGE_SEARCHFIELD event', () => {
		expect(
			reducers.searchRobots(initialStateSearch, {
				type    : CHANGE_SEARCH_FIELD,
				payload : 'abc'
			})
		).toEqual({ searchField: 'abc' });
	});
});

describe('requestRobots', () => {
	const initialStateRobots = {
		error     : '',
		robots    : [],
		isPending : false
	};
	it('should return the initial state', () => {
		expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
	});
	it('should handle REQUEST_ROBOTS_PINDING action', () => {
		expect(
			reducers.requestRobots(initialStateRobots, {
				type : REQUEST_ROBOTS_PENDING
			})
		).toEqual({
			error     : '',
			robots    : [],
			isPending : true
		});
	});
	it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
		expect(
			reducers.requestRobots(initialStateRobots, {
				type    : REQUEST_ROBOTS_SUCCESS,
				payload : [
					{
						id    : 123,
						name  : 'test',
						email : 'test@gmail.com'
					}
				]
			})
		).toEqual({
			error     : '',
			robots    : [
				{
					id    : 123,
					name  : 'test',
					email : 'test@gmail.com'
				}
			],
			isPending : false
		});
	});
	it('should handle REQUEST_ROBOTS_FAILED action', () => {
		expect(
			reducers.requestRobots(initialStateRobots, {
				type    : REQUEST_ROBOTS_FAILED,
				payload : 'CRASHED'
			})
		).toEqual({
			isPending : false,
			error     : 'CRASHED',
			robots    : []
		});
	});
});
