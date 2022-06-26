import React from 'react';
import Styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import Button from '../../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);
function SideBar() {
	return (
		<aside className={cx('wrapper')}>
			<div className={cx('menu')}>
				<Button className={cx('menu-item')} to="/forYou" leftIcon={<FontAwesomeIcon icon={faHouse} />}>
					For You
				</Button>
				<Button className={cx('menu-item')} to="/following" leftIcon={<FontAwesomeIcon icon={faUserGroup} />}>
					Following
				</Button>
				<Button className={cx('menu-item')} to="/live" leftIcon={<FontAwesomeIcon icon={faVideo} />}>
					Live
				</Button>
			</div>
		</aside>
	);
}

export default SideBar;
