import * as React from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './index.module.css';

interface LikesProps {}
interface LikesState {
	likes: number;
}
class Likes extends React.Component<LikesProps, LikesState> {
	constructor() {
		super();
		this.state = {
			likes: 0
		};
		this.changeLikes = this.changeLikes.bind(this);
	}
	changeLikes(e) {
		this.setState((state) => ({ likes: (this.state.likes += 1) }));
	}
	render() {
		return (
			<div className={styles.sticky}>
				{this.state.likes === 0 ? (
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
