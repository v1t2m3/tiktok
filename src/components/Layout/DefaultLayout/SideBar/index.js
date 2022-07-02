import React, { useEffect, useState } from 'react';
import Styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import Button from '../../../Button';
import AccountItem from '../../components/Header/SearchAccountItem';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

function SideBar() {
	const [ accountInfo, setAccountInfo ] = useState({});
	useEffect(() => {
		axios
			.get(`http://localhost:3004/suggested_acc`)
			.then((res) => {
				setAccountInfo(res.data);
			})
			.catch((error) => console.log(error));
	}, []);
	console.log(accountInfo[1]);
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
					LIVE
				</Button>
			</div>
			<div className={cx('suggested-accounts')}>
				<p>Suggested accounts</p>
				<AccountItem info={accountInfo[0]} />
				<Button to="/seeall" className={cx('seeall-btn')}>
					See all
				</Button>
			</div>
			<div className={cx('discovery')}>
				<Button className={cx('hashtag')} rounded>
					#giaitri
				</Button>
				<Button className={cx('hashtag')} rounded>
					#amnhac
				</Button>
				<Button className={cx('hashtag')} rounded>
					#thegioidienanh
				</Button>
				<Button className={cx('hashtag')} rounded>
					#critianoRonaldo
				</Button>
				<Button className={cx('hashtag')} rounded>
					# Việt Nam hỡi!
				</Button>
				<Button className={cx('hashtag')} rounded>
					# Không ai chung tình được mãi
				</Button>
				<Button className={cx('hashtag')} rounded>
					# Nụ cười tuổi 18
				</Button>
				<Button className={cx('hashtag')} rounded>
					# Anh thanh niên
				</Button>
			</div>
		</aside>
	);
}

export default SideBar;
