import * as React from 'react';
import { inc } from 'ramda';
import Rebase from 're-base';
import { Icon } from 'semantic-ui-react';
import styles from './index.module.css';
import base from '../../firebase';

interface LikesProps {}
interface LikesState {
	likes: number;
}
class Likes extends React.Component<LikesProps, LikesState> {
	constructor(props) {
		super(props);
		this.state = {
			likes: 0
		};
		this.changeLikes = this.changeLikes.bind(this);
	}
	componentDidMount() {
		base.syncState('likes', {
			state: 'likes',
			asArray: false,
			context: this
		});
	}
	changeLikes() {
		this.setState({ likes: inc(this.state.likes) });
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
