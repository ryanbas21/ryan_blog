import React, { useState } from 'react';
import { equals } from 'ramda';
import { Icon } from 'semantic-ui-react';
import styles from './index.module.css';

interface LikesProps {}

function changeLikes(likes, setLikes) {
	setLikes(likes + 1);
}
const Likes: React.SFC<LikesProps> = (props) => {
	const [likes, setLikes] = useState(0);
	return (
		<div className={styles.sticky}>
			{equals(likes, 0) ? (
				<Icon
					size={'large'}
					name={'heart outline'}
					data-testid="likes-button"
					onClick={() => changeLikes(likes, setLikes)}
				/>
			) : (
				<Icon
					size={'large'}
					name={'heart'}
					color={'red'}
					data-testid="hearted-like"
					onClick={() => changeLikes(likes, setLikes)}
				/>
			)}
			<i data-testid="total-likes">{likes}</i>
		</div>
	);
};

export default Likes;
