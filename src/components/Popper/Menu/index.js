import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '../../Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
	const [ history, setHistory ] = useState([ { data: items } ]);
	const current = history[history.length - 1];

	const renderItems = () => {
		return current.data.map((item, index) => {
			const isParent = !!item.children; //2 dau ! co nghia la convert sang kieu bool
			return (
				<MenuItem
					key={index}
					data={item}
					onClick={() => {
						if (isParent) {
							setHistory((pre) => [ ...pre, item.children ]);
						}
					}}
				/>
			);
		});
	};
	return (
		<Tippy
			interactive
			delay={[ 0, 800 ]}
			placement="bottom-end"
			render={(attrs) => (
				<div className={cx('menu-list')} tabIndex="-1" {...attrs}>
					<PopperWrapper className={cx('menu-poper')}>
						<Header title="Language" />
						{renderItems()}
					</PopperWrapper>
				</div>
			)}
		>
			{children}
		</Tippy>
	);
}
export default Menu;
