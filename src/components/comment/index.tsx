import * as React from 'react';
import Rebase from 're-base';
import { Comment } from 'semantic-ui-react';
import { map, concat } from 'ramda';
import CommentHeader from './commentHeader';
import CreateComment from './createComment';
import CurrentComments from './currentComments';
import base from '../../firebase';

interface CommentProps {
	user: string;
	styles: { comments: any };
}

interface CommentData {
	content: string;
	date: string;
	author: string;
}
interface CommentState {
	commentText: '';
	date: '';
	comments: CommentData[];
}
class Comments extends React.Component<CommentProps, CommentState> {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
			commentText: '',
			date: ''
		};
		this.onReply = this.onReply.bind(this);
		this.replyChange = this.replyChange.bind(this);
	}

	componentDidMount() {
		base.syncState(`comments`, {
			context: this,
			state: 'comments',
			asArray: true
		});
	}

	replyChange(e) {
		const commentText = e.target.value;
		this.setState({ commentText });
	}

	onReply(e) {
		const { user } = this.props;
		const date = new Date(Date.now()).toString();
		const { comments, commentText } = this.state;
		this.setState({
			commentText: '',
			comments: this.state.comments.concat({
				date,
				author: 'Ryan',
				content: commentText
			})
		});
	}

	render() {
		const { user } = this.props;
		return (
			<Comment className={this.props.styles.comments}>
				<CommentHeader />
				{map(
					(comment: CommentData) => (
						<CurrentComments
							key={comment.date}
							user={comment.author}
							date={comment.date}
							content={comment.content}
							replyChange={this.replyChange}
							onReply={this.onReply}
						/>
					),
					this.state.comments
				)}
				<CreateComment
					commentText={this.state.commentText}
					replyChange={this.replyChange}
					onReply={this.onReply}
				/>
			</Comment>
		);
	}
}

export default Comments;
