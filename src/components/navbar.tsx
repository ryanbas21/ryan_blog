import * as React from 'react';
import { Menu } from 'semantic-ui-react';

interface Pages {
	name: string;
	path: string;
	exact?: boolean;
}
interface NavbarState {
	pages: Pages[];
}
export default class Navbar extends React.Component<any, NavbarState> {
	constructor(props) {
		super(props);
		this.state = {
			pages: [
				{
					name: 'Home',
					path: '/',
					exact: true
				},
				{
					name: 'Blog',
					path: '/',
					exact: true
				}
			]
		};
	}
	render() {
		const { pages } = this.state;
    console.log(this.props);
		return (
			<Menu>
				{pages.map((page: Pages) => (
					<Menu.Item key={page.name} to={page.path}>
						{page.name}
					</Menu.Item>
				))}
			</Menu>
		);
	}
}
