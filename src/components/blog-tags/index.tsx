import * as React from 'react';
import { Icon, Label } from 'semantic-ui-react';
import { map, split } from 'ramda';
import styles from './tag.module.css';

interface TagProps {
	tags: string[];
}

const Tag: React.SFC<TagProps> = ({ tags }) => (
	<div className={styles.spacing}>
		{map(
			(type, i) => (
				<Label className={styles.spacing} key={type}>
					<Icon name="tag" />
					{type}
				</Label>
			),
			split(',', tags)
		)}
	</div>
);

export default Tag;
