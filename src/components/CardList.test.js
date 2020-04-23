import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList.js";

it("expect to render CardList component", () => {
	const mockRobots = [
		{
			id       : 1,
			name     : "John Snow",
			username : "JohnJohn",
			email    : "john@gmail.com"
		},
		{
			id       : 2,
			name     : "Darek Snow",
			username : "Daks",
			email    : "darek@gmail.com"
		}
	];
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
