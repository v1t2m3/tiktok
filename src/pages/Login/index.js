import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Styles from './Login.module.scss';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { logInPage } from '../../redux/actions';

const cx = classNames.bind(Styles);
export default function Login(props) {
	const dispatch = useDispatch();
	const MESSAGE_ERROR = {
		email: 'Email error',
		password: 'Password error'
	};

	const REGEX = {
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
	};

	const [ form, setForm ] = useState({});

	function handleChange(event) {
		let error = REGEX[event.target.name].test(event.target.value) ? '' : MESSAGE_ERROR[event.target.name];
		setForm({
			...form,
			[event.target.name]: { value: event.target.value, error: error }
		});
	}
	function handleSubmit() {
		const isFilled = form.email && form.email.value && form.password && form.password.value;
		const isError = isFilled && (form.email.error || form.password.error);
		if (isFilled && !isError) {
			dispatch(logInPage(true));
		}
	}

	return (
		<div className={cx('form-login')}>
			<h1>Login to TikTok</h1>
			<form>
				<div className={cx('custom-input', `${form.email && form.email.error && 'custom-input-error'}`)}>
					<label>Email </label>
					<input name="email" value={(form.email && form.email.value) || ''} onChange={handleChange} />
					{form.email && form.email.error && <p className={cx('error')}>Email error</p>}
				</div>
				<div className={cx('custom-input', `${form.password && form.password.error && 'custom-input-error'}`)}>
					<label>Password </label>
					<input
						type="password"
						name="password"
						value={(form.password && form.password.value) || ''}
						onChange={handleChange}
					/>
					{form.password && form.password.error && <p className={cx('error')}>Password error</p>}
				</div>
				<Button className={cx('submit-btn')} outline onClick={handleSubmit}>
					Login
				</Button>
				<Button className={cx('submit-btn')} outline to="/">
					Cancel
				</Button>
			</form>
		</div>
	);
}
