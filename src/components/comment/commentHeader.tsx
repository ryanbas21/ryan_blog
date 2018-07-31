import * as React from 'react';
import { Header, Comment } from 'semantic-ui-react';

const CommentHeader: React.SFC<{}> = () => (
	<Comment.Group>
		<Header as="h3" dividing>
			Comments
		</Header>
	</Comment.Group>
);

export default CommentHeader;
