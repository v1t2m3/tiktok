import React from 'react';
import classNames from 'classnames/bind';
import Styles from './Content.module.scss';

// Render a YouTube video player

const cx = classNames.bind(Styles);
function Videos(props) {
	return (
		<video className={cx('video-item')} loop autoPlay controls muted>
			<source src={props.src} type="video/mp4" />
		</video>
	);
}

export default Videos;
