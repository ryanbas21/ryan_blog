import * as React from 'react';
import { Comment } from 'semantic-ui-react';

export interface CurrentCommentProps {
	user: string;
	date: string;
	content: string;
	replyChange: (e: React.FormEvent<HTMLInputElement>) => any;
	onReply: (...args: any[]) => any;
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
