import React from 'react';
import classNames from 'classnames/bind';
import Styles from './Content.module.scss';

// Render a YouTube video player

const cx = classNames.bind(Styles);
function Videos({ sourcevideo }) {
	return (
		<video className={cx('video-item')} loop autoPlay controls muted>
			<source src={require('../../assets/video/video1.mp4')} type="video/mp4" />
		</video>
	);
}

export default Videos;
