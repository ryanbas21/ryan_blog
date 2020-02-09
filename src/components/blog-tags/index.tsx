import * as React from 'react';
import { Icon, Label } from 'semantic-ui-react';
import { pipe, map, split } from 'ramda';
import styles from './tag.module.css';

interface TagProps {
	tags: string;
}
function mapTags(type: string): React.ReactNode {
	return (
		<Label className={styles.spacing} key={type}>
			<Icon name="tag" />
			{type}
		</Label>
	);
}

const renderTags: (tags) => React.ReactNode = pipe(
	split(','),
	map(mapTags)
);

const Tag: React.SFC<TagProps> = ({ tags }) => (
	<div className={styles.spacing}>{renderTags(tags)}</div>
);

export default Tag;
