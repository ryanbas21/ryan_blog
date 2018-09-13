import * as React from 'react';
import CurrentComments from './currentComments';
import { Form } from 'semantic-ui-react';

interface ReplyProps {}
interface ReplyState {
	replyText: string;
  replies: string[];
} 
export default class Reply extends React.Component<ReplyProps, ReplyState> {
	constructor(props) {
		super(props);
		this.state = {
			replyText: '',
      replies: []
		};

		this.onChange = this.onChange.bind(this);
	}
	onChange(e) {
		const value = e.target.value;
		this.setState({ replyText: value });
	}
	onClick() {
		this.setState((state) => ({
			replyText: '',
			replies: [].concat(state.replyText)
		}));
	}

	render() {
		return (
			<React.Fragment>
				<Form.TextArea data-testid="textbox" onChange={this.onChange} />
				<button data-testid="reply-button" onClick={this.onClick}>
					Reply
				</button>
        {this.state.replies.map(replies => 
        <CurrentComments
          user='Ryan'
          date={'Today'}
          content={replies}
          onReply={() => {}}
          replyChange={() => {}}
        />)}
			</React.Fragment>
		);
	}
}
