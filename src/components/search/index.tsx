import React from 'react';
import contentful from '../../utils/contentful-client';
import { length, prop, toLower } from 'ramda';
import { push } from "gatsby-link"
import { connect } from 'react-redux';
import { Search } from 'semantic-ui-react';
import { toSlug, filterTitles, resultsArray } from '../../utils/index';

interface SearchProps {
  posts: any[];
}
interface SearchState {
	filtered: any[];
  searchQuery: string;
}

const style = {
	position: 'absolute',
	right: 0
};
class SearchComponent extends React.Component<SearchProps, SearchState> {
	constructor(props) {
		super(props);
		this.state = {
			filtered: [],
      searchQuery: ''
		};
    this.onResultSelect = this.onResultSelect.bind(this);
		this.search = this.search.bind(this);
	}
  onResultSelect(e: React.MouseEvent<any>, { result }) {
    const { title } = result;
    this.setState({ searchQuery: '', filtered: [] });
    return push('/' + toSlug(title))
  }
	search(event: React.FormEvent<any>) {
		const query = toLower(event.currentTarget.value);
    const { posts } = this.props
		return this.setState({ searchQuery: query, filtered: filterTitles(query, posts) });
	}

	render(): JSX.Element {
		return (
			<Search
        selectFirstResult
        value={this.state.searchQuery}
				style={style}
				results={resultsArray(this.state.filtered)}
				icon="search"
				placeholder="Search Articles"
				type="text"
				onSearchChange={this.search}
        onResultSelect={this.onResultSelect}
			/>
		);
	}
}

export default connect(state => ({ posts: prop('posts', state) }))(SearchComponent);
