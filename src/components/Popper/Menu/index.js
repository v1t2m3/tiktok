import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '../../Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn }) {
	const [ history, setHistory ] = useState([ { data: items } ]);
	const current = history[history.length - 1];
	console.log(current.data);
	const handleBack = () => {
		setHistory((prev) => prev.slice(0, prev.length - 1));
	};
	const renderItems = () => {
		return current.data.map((item, index) => {
			const isParent = !!item.children; //2 dau ! co nghia la convert sang kieu bool
			return (
				<MenuItem
					key={index}
					data={item}
					onClick={() => {
						if (isParent) {
							setHistory((prev) => [ ...prev, item.children ]);
						} else {
							onChange(item);
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
			offset={[ 10, 10 ]}
			placement="bottom-end"
			render={(attrs) => (
				<div className={cx('menu-list')} tabIndex="-1" {...attrs}>
					<PopperWrapper className={cx('menu-poper')}>
						{history.length > 1 && <Header title={current.title} onBack={handleBack} />}
						<div className={cx('menu-body')}>{renderItems()}</div>
					</PopperWrapper>
				</div>
			)}
			onHidden={() => {
				setHistory((prev) => prev.slice(0, 1));
			}}
		>
			{children}
		</Tippy>
	);
}
export default Menu;
