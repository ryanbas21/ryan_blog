import * as React from 'react';
import { Comment } from 'semantic-ui-react';
import { map, concat } from 'ramda';
import CommentHeader from './commentHeader';
import CreateComment from './createComment';
import CurrentComments from './currentComments';

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
	comments: Comment[];
}
class Comments extends React.Component<CommentProps, {}> {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
			content: '',
			date: ''
		};
		this.onReply = this.onReply.bind(this);
		this.replyChange = this.replyChange.bind(this);
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
			comments: comments.concat({
				author: user,
				date,
				content: commentText
			}),
			commentText: ''
		});
	}
	render() {
		const { user } = this.props;
		const { date, content } = this.state;
		return (
			<Comment className={this.props.styles.comments}>
				<CommentHeader />
				{map(
					(comment: CommentData) => (
						<CurrentComments
							key={date}
							user={comment.user}
							date={comment.date + content}
							content={comment.content}
							replyChange={this.replyChange}
							onReply={this.onReply}
						/>
					),
					this.state.comments
				)}
				<CreateComment replyChange={this.replyChange} onReply={this.onReply} />
			</Comment>
		);
	}
}

export default Comments;
