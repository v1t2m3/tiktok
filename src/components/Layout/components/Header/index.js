import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'tippy.js/dist/tippy.css';
import Button from '../../../Button';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import {
	faChain,
	faCircleXmark,
	faCloudUploadAlt,
	faCoins,
	faEarthAsia,
	faEllipsisVertical,
	faKeyboard,
	faMagnifyingGlass,
	faMessage,
	faPerson,
	faQuestion,
	faSignOut,
	faSpinner,
	faUserGear
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from './SearchAccountItem';
import Menu from '../../../Popper/Menu';
import { faSteamSymbol } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const handleMenuChange = (menuItem) => {
	switch (menuItem.type) {
		case 'language':
			// fcc
			break;
		default:
	}
};
const currentUser = false;

const MENU_ITEMS = [
	{
		icon: <FontAwesomeIcon icon={faEarthAsia} />,
		title: 'English',
		children: {
			title: 'Language',
			data: [
				{
					code: 'En',
					title: 'English'
				},
				{
					code: 'Fc',
					title: 'France'
				},
				{
					code: 'Vi',
					title: 'Vietnam'
				}
			]
		}
	},
	{
		icon: <FontAwesomeIcon icon={faQuestion} />,
		title: 'Feeback and Help',
		to: '/feedback_page'
	},
	{
		icon: <FontAwesomeIcon icon={faKeyboard} />,
		title: 'Keyboard Shorcut'
	}
];
const userMenu = [
	{
		icon: <FontAwesomeIcon icon={faUser} />,
		title: 'View Profile',
		to: '/Profile_page'
	},
	{
		icon: <FontAwesomeIcon icon={faCoins} />,
		title: 'Get coints',
		to: '/getCoins'
	},
	{
		icon: <FontAwesomeIcon icon={faUserGear} />,
		title: 'Setting',
		to: '/setting'
	},
	...MENU_ITEMS,
	{
		icon: <FontAwesomeIcon icon={faSignOut} />,
		title: 'Log out',
		to: '/logout',
		separate: true
	}
];
const cx = classNames.bind(styles);
function Header() {
	const [ searchResult, setSearchResult ] = useState([]);
	useEffect(() => {
		setTimeout(() => {
			setSearchResult([]);
		}, 3000);
	}, []);
	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<div className={cx('logo')}>
					<img src={images.logo} alt="TIKTOK" />
				</div>
				<HeadlessTippy
					interactive
					visibles
					render={(attrs) => (
						<div className={cx('search-tippy')} tabIndex="-1" {...attrs}>
							<PopperWrapper>
								<h4 className={cx('search-title')}>Accounts</h4>
								<AccountItem />
								<AccountItem />
								<AccountItem />
								<AccountItem />
								<AccountItem />
								<AccountItem />
								<AccountItem />
								<AccountItem />
							</PopperWrapper>
						</div>
					)}
				>
					<div className={cx('search')}>
						<input placeholder="Search accounts and videos" spellCheck="false" />
						<button className={cx('clear')}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
						<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
						<div />
						<button className={cx('search-btn')}>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
				</HeadlessTippy>
				<div className={cx('action')}>
					{currentUser ? (
						<div>
							<Tippy delay={300} content="Upload video" placement="bottom">
								<button className={cx('action-btn')}>
									<FontAwesomeIcon icon={faCloudUploadAlt} />
								</button>
							</Tippy>
							<Tippy delay={300} content="Messenger" placement="bottom">
								<button className={cx('action-btn')}>
									<FontAwesomeIcon icon={faMessage} />
								</button>
							</Tippy>
						</div>
					) : (
						<div className={cx('action-user')}>
							<Button text to="/upload">
								Up load
							</Button>
							<Button primary to="/login">
								Log in
							</Button>
						</div>
					)}
					<Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
						{currentUser ? (
							<div>
								<img
									src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
									className={cx('user-avatar')}
									alt="Nguyen Van Tam"
								/>
							</div>
						) : (
							<div>
								<button className={cx('menu-btn')}>
									<FontAwesomeIcon icon={faEllipsisVertical} />
								</button>
							</div>
						)}
					</Menu>
				</div>
				<div />
			</div>
		</header>
	);
}

export default Header;
