import * as React from 'react';
import Link from 'gatsby-link';
import * as contentful from 'contentful';
import { derivePosts } from '../utils/';

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
        console.log(items);
        this.setState({
          posts: derivePosts(items) 
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
