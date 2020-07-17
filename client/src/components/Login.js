import React, { useEffect, useState, useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import Alert from '../components/layouts/Alert';
import AuthContext from '../context/auth/authContext';

function Login() {
	const [userData, setUser] = useState({
		email: '',
		password: '',
  });
  const authContext = useContext(AuthContext);
	const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const { login } = authContext;
	const onChangeHandler = (e) => {
		setUser({ ...userData, [e.target.name]: e.target.value });
	};
  const { email, password } = userData;
  
	const onSubmit = (e) => {
		e.preventDefault();
		if (email === '' || password === '') {
			setAlert('Email and password are required', 'danger');
		} else {
      login(userData)
    }
	};
	return (
		<section className='body-sign'>
			<div className='center-sign'>
				<a href='https://code.in/' className='logo float-left'>
					<img src='https://code.in/images/logo-gif.gif' height='54' alt='Code.in' />
				</a>

				<div className='panel card-sign'>
					<div className='card-title-sign mt-3 text-right'>
						<h2 className='title text-uppercase font-weight-bold m-0'>
							<i className='fas fa-user mr-1'></i> Sign In
						</h2>
					</div>
					<div className='card-body'>
						<Alert />
						<form method='post' onSubmit={onSubmit}>
							<div className='form-group mb-3'>
								<label>Username</label>
								<div className='input-group'>
									<input
										name='email'
										type='email'
										className='form-control form-control-lg placeholder'
										onChange={onChangeHandler}
									/>
									<span className='input-group-append'>
										<span className='input-group-text'>
											<i className='fas fa-user'></i>
										</span>
									</span>
								</div>
							</div>

							<div className='form-group mb-3'>
								<div className='clearfix'>
									<label className='float-left'>Password</label>
									<a href='pages-recover-password.html' className='float-right'>
										Lost Password?
									</a>
								</div>
								<div className='input-group'>
									<input
										name='password'
										type='password'
										className='form-control form-control-lg placeholder'
										onChange={onChangeHandler}
									/>
									<span className='input-group-append'>
										<span className='input-group-text'>
											<i className='fas fa-lock'></i>
										</span>
									</span>
								</div>
							</div>

							<div className='row'>
								<div className='col-sm-8'>
									<div className='checkbox-custom checkbox-default'>
										<input id='RememberMe' name='rememberme' type='checkbox' />
										<label htmlFor='RememberMe'>Remember Me</label>
									</div>
								</div>
								<div className='col-sm-4 text-right'>
									<button type='submit' className='btn btn-primary mt-2'>
										Sign In
									</button>
								</div>
							</div>

							<span className='mt-3 mb-3 line-thru text-center text-uppercase'>
								<span>or</span>
							</span>
							<p className='text-center'>
								Don't have an account yet? <a href='pages-signup.html'>Sign Up!</a>
							</p>
						</form>
					</div>
				</div>

				<p className='text-center text-muted mt-3 mb-3'>
					&copy; Copyright 2020. All Rights Reserved.
				</p>
			</div>
		</section>
	);
}

export default Login;
