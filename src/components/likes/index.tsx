import * as React from 'react';
import { isNil } from 'ramda';
import { Icon } from 'semantic-ui-react';
import styles from './index.module.css';

interface LikesProps {}
interface LikesState {
	likes: number;
}
class Likes extends React.Component<LikesProps, LikesState> {
	constructor(props: LikesProps) {
		super(props);
		this.state = {
			likes: 0
		};
		this.changeLikes = this.changeLikes.bind(this);
	}
	changeLikes() {
		this.setState((state: LikesState) => ({ likes: state.likes + 1 }));
	}
	render() {
		return (
			<div className={styles.sticky}>
				{isNil(this.state.likes) ? (
					<Icon
						size={'large'}
						name={'heart outline'}
						data-testid="likes-button"
						onClick={this.changeLikes}
					/>
				) : (
					<Icon
						size={'large'}
						name={'heart'}
						color={'red'}
						data-testid="hearted-like"
						onClick={this.changeLikes}
					/>
				)}
				<i data-testid="total-likes">{this.state.likes}</i>
			</div>
		);
	}
}
export default Likes;
