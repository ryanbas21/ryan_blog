import * as React from 'react';
import { Comment } from 'semantic-ui-react';

interface CurrentCommentProps {
	user: string;
	date: string;
	content: string;
	replyChange: (e) => void;
	onReply: (e) => void;
}
const CurrentComments: React.SFC<CurrentCommentProps> = (props) => (
	<Comment.Group key={props.user + props.date + props.content}>
		<Comment.Author as="label">{props.user}</Comment.Author>
		<Comment.Metadata>
			<div>{props.date}</div>
		</Comment.Metadata>
		<Comment.Text content={props.content} />
	</Comment.Group>
);

export default CurrentComments;
