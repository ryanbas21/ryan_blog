import * as React from 'react';
import Link from 'gatsby-link';
import * as contentful from 'contentful';
import { map } from 'ramda';

interface Post {
  title: string;
  content: string;
  media?: any;
}
interface BlogState {
  posts: Post[];
}
class Blog extends React.Component<any, BlogState> {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    
  }
	componentDidMount() {
		contentful
			.createClient({
				space: process.env.CONTENTFUL_SPACE,
				accessToken: process.env.CONTENTFUL_API
			})
			.getEntries()
			.then(({ items }) => {
        this.setState({
          posts: map(post => ({ title: post.fields.title, content: post.fields.content }), items) 
        })
      });
	}

	render() {
    const { posts } = this.state;
		return (
			<div>
          {posts.map(post => <div key={post.title}>{post.title}</div>)}
			</div>
		);
	}
}

export default Blog;
