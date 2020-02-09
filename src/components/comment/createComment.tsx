import * as React from 'react';
import { Button, Form, FormField, TextArea} from 'grommet';
import { Chat } from 'grommet-icons'

interface CreateProps {
	onReply: (a: React.MouseEvent<HTMLButtonElement>) => void;
	replyChange: (a: React.FormEvent<HTMLTextAreaElement>) => void;
	commentText: string;
}
const CreateComment: React.SFC<CreateProps> = ({
	onReply,
	replyChange,
	commentText
}) => (
	<Form>
    <FormField label="Comment">
     <TextArea
			  data-testid="textbox"
			  value={commentText}
			  onChange={replyChange}
     />
    </FormField>
		<Button
			onClick={onReply}
			id="submit"
      label="Add Reply"
      icon={<Chat />}
	  />
	</Form>
);

export default CreateComment;
