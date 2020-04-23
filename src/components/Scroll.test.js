import { shallow } from "enzyme";
import React from "react";
import Scroll from "./Scroll.js";
import CardList from "./Scroll.js";

it("expect to render Scroll component and it's props.children", () => {
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
	expect(
		shallow(
			<Scroll>
				<CardList robots={mockRobots} />
			</Scroll>
		)
	).toMatchSnapshot();
});
