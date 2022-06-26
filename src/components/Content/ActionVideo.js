import React from 'react';
import classNames from 'classnames/bind';
import Styles from './Content.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);
function ActionVideo({ numOfHeart }) {
	return (
		<div className={cx('action-video')}>
			<div className={cx('heart')}>
				<div className={cx('action-icon')}>
					<FontAwesomeIcon icon={faHeart} />
				</div>
				<p>{numOfHeart}123</p>
			</div>
			<div className={cx('comment')}>
				<div className={cx('action-icon')}>
					<FontAwesomeIcon icon={faCommentDots} />
				</div>
				<p>{numOfHeart}234k</p>
			</div>
			<div className={cx('share')}>
				<div className={cx('action-icon')}>
					<FontAwesomeIcon icon={faShare} />
				</div>
				<p>{numOfHeart}345k</p>
			</div>
		</div>
	);
}

export default ActionVideo;
