import React from 'react';
import ContentItem from '../../components/Content';
import classNames from 'classnames/bind';
import Styles from './Home.module.scss';

const cx = classNames.bind(Styles);
function Home() {
	return (
		<div className={cx('home')}>
			<ContentItem />
			<ContentItem />
			<ContentItem />
			<ContentItem />
		</div>
	);
}

export default Home;
