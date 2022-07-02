import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import Styles from './Login.module.scss';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logInPage } from '../../redux/actions';
import { loginSelector } from '../../redux/selector';

const cx = classNames.bind(Styles);

export default function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isLogin = useSelector(loginSelector);
	console.log('islogin:', isLogin);
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
	if (isLogin) {
		navigate('../', { replace: true });
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
