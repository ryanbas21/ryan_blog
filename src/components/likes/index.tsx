import React, { useState } from 'react';
import { Favorite } from 'grommet-icons'
import { ifElse, equals, thunkify } from 'ramda';
import { Icon } from 'semantic-ui-react';
import styles from './index.module.css';

interface LikesProps {}

const changeLikes = thunkify((likes, setLikes) => setLikes(likes + 1));
const equalsZero = equals(0);

const Likes: React.SFC<LikesProps> = (props) => {
	const [likes, setLikes] = useState(0);
	return (
		<div className={styles.sticky}>
			{ifElse(
				equalsZero,
				() => (
					<Favorite
						data-testid="likes-button"
						onClick={changeLikes(likes, setLikes)}
					/>
				),
				() => (
					<Favorite
						name={'heart'}
						color={'red'}
						data-testid="hearted-like"
						onClick={changeLikes(likes, setLikes)}
					/>
				)
			)(likes)}
			<i data-testid="total-likes">{likes}</i>
		</div>
	);
};

export default Likes;
