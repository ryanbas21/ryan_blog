import React from 'react';
import contentful from '../../utils/contentful-client';
import { prop, toLower } from 'ramda';
import { connect } from 'react-redux';
import { Search } from 'semantic-ui-react';
import { filterTitles } from '../../utils/index';

interface SearchProps {
  posts: any[];
}
interface SearchState {
	filtered: any[];
}

const style = {
	position: 'absolute',
	right: 0
};
class SearchComponent extends React.Component<SearchProps, SearchState> {
	constructor(props) {
		super(props);
		this.state = {
			filtered: []
		};
		this.search = this.search.bind(this);
	}
	search(event: React.FormEvent<any>) {
		const query = toLower(event.currentTarget.value);
		return this.setState({ filtered: filterTitles(query, this.props.posts) });
	}

	render(): JSX.Element {
    console.log(this.props.posts);
		return (
			<Search
				style={style}
				results={this.state.filtered}
				icon="search"
				placeholder="Search Articles"
				type="text"
				onSearchChange={this.search}
			/>
		);
	}
}

export default connect(state => ({ posts: prop('posts', state) }))(SearchComponent);
