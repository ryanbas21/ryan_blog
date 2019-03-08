import * as React from 'react';
import { Comment } from 'semantic-ui-react';
import { map, concat } from 'ramda';
import CommentHeader from './commentHeader';
import CreateComment from './createComment';
import CurrentComments from './currentComments';

interface CommentProps {
	styles?: { comments: any };
}

interface CommentData {
	content: string;
	date: string;
}
interface CommentState {
	comments: CommentData[];
	content: string;
	commentText: string;
	date: Date | String;
}
class Comments extends React.Component<CommentProps, CommentState> {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
			commentText: '',
			content: '',
			date: ''
		};
		this.onReply = this.onReply.bind(this);
		this.replyChange = this.replyChange.bind(this);
	}
	replyChange(e: React.FormEvent<HTMLTextAreaElement>) {
		const commentText = e.currentTarget.value;
		this.setState({ ...this.state, commentText });
	}
	onReply() {
		const date = new Date(Date.now()).toString();
		const { comments, commentText } = this.state;
		this.setState({
			comments: concat(
				[
					{
						date,
						content: commentText
					}
				],
				comments
			),
			commentText: ''
		});
	}
	render() {
		const { date, content } = this.state;
		return (
			<Comment className={this.props.styles.comments}>
				<CommentHeader />
				{map(
					(comment: CommentData) => (
						<CurrentComments
							user={'anon'}
							key={content + date}
							date={comment.date}
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
