import * as React from 'react';
import { Box, Header, Main } from 'grommet';

export interface CurrentCommentProps {
	user: string;
	date: string;
	content: string;
	replyChange: (e: React.FormEvent<HTMLInputElement>) => any;
	onReply: (...args: any[]) => any;
}

const CurrentComments: React.SFC<CurrentCommentProps> = (props) => (
	<Box key={props.user + props.date + props.content}>
		<Header as="label">{props.user}</Header>
		<Header>{props.date}</Header>
    <Main >{props.content}</Main>
	</Box>
);

export default CurrentComments;
