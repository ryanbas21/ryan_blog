import * as React from 'react';
import { connect } from 'react-redux';
import { getPosts, GET_POSTS, posts } from '../features/blog/blog.reducer';
import Link from 'gatsby-link';
import Cards from '../components/card';
import { derivePosts } from '../utils/';

interface Post {
	title: string;
	content: string;
	media?: any;
  date: string;
  getPosts: () => { type: GET_POSTS }
}
interface BlogState {
	posts: Post[];
}
const style = {
	margin: 20
};

class Blog extends React.Component<any, BlogState> {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}
	componentDidMount() {
    this.props.getPosts();
	}

	render() {
		const { posts } = this.props;
		return (
			<div>
				{posts.map((post) => (
					<div key={post.title}>
						<Cards
							style={style}
							date={post.date}
							title={post.title}
							content={post.content}
							media={post.media}
						/>
					</div>
				))}
			</div>
		);
	}
}

function mapStateToProps (state) {
   return {
     posts: posts(state)
  }
}
const mapDispatchToProps = {
  getPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
