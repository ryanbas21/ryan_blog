import * as React from 'react';
import { Form, Button } from 'semantic-ui-react';

interface CreateProps {
	onReply: (e) => void;
	replyChange: (e) => void;
	commentText: string;
}
const CreateComment: React.SFC<CreateProps> = ({
	onReply,
	replyChange,
	commentText
}) => (
	<Form reply>
		<Form.TextArea
			data-testid="textbox"
			value={commentText}
			onChange={replyChange}
		/>
		<Button
			onClick={onReply}
			id="submit"
			content="Add Reply"
			labelPosition="left"
			icon="edit"
			primary
		/>
	</Form>
);

export default CreateComment;
