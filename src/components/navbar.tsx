import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import Link from 'gatsby-link';
interface Pages {
	name: string;
	path: string;
	exact?: boolean;
}
interface NavbarState {
  activeItem: string;
	pages: Pages[];
}
export default class Navbar extends React.Component<any, NavbarState> {
	constructor(props) {
		super(props);
		this.state = {
      activeItem: props.location.pathname,
			pages: [
				{
					name: 'Home',
					path: '/',
					exact: true
				},
				{
					name: 'Blog',
					path: '/blog',
					exact: true
				},
        {
					name: 'Premium',
					path: '/premium',
					exact: true
				}

			]
		};
    this.handleClick = this.handleClick.bind(this);
	}
   componentWillReceiveProps(nextProps) {
    const nextPathname = nextProps.location.pathname
    const currentPathname = this.props.location.pathname

    if (nextPathname !== currentPathname) {
      this.setState({
        activeItem: `/${nextPathname
          .split('/')
          .pop()
          .toString()}`,
      })
    }
  }
  handleClick(e, path) { return <Link to={path} />  }
	render() {
		const { pages } = this.state;
		return (
			<Menu>
				{pages.map((page: Pages) => (
					<Menu.Item active={this.state.activeItem === page.path} key={page.name} as={Link} to={page.path}>
              {page.name}
					</Menu.Item>
				))}
			</Menu>
		);
	}
}
