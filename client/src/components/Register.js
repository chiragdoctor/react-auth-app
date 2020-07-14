import React, { useState } from 'react';

function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2, role } = user;

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
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
              <i className='fas fa-user mr-1'></i> Sign Up
            </h2>
          </div>
          <div className='card-body'>
            <form>
              <div className='form-group mb-3' onChange={onChange}>
                <label className='mr-5'>
                  Student
                  <input name='role' type='radio' className='radio-inline ml-2' value='student' defaultChecked />
                </label>
                <label className='mr-5'>
                  Faculty
                  <input name='role' type='radio' className='radio-inline ml-2' value='faculty' />
                </label>
              </div>
              <div className='form-group mb-3'>
                <label>Name</label>
                <input
                  name='name'
                  placeholder={role === 'student' ? 'Enter Student Name' : 'Enter Faculty Name'}
                  type='text'
                  className='form-control form-control-lg placeholder'
                  value={name}
                  onChange={onChange}
                />
              </div>

              <div className='form-group mb-3'>
                <label>E-mail Address</label>
                <input
                  name='email'
                  type='email'
                  placeholder='Enter Email'
                  className='form-control form-control-lg placeholder'
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className='form-group mb-0'>
                <div className='row'>
                  <div className='col-sm-6 mb-3'>
                    <label>Password</label>
                    <input
                      name='password'
                      type='password'
                      placeholder='Enter Password'
                      className='form-control form-control-lg placeholder'
                      value={password}
                      onChange={onChange}
                      minLength={6}
                    />
                  </div>
                  <div className='col-sm-6 mb-3'>
                    <label>Password Confirmation</label>
                    <input
                      name='password2'
                      placeholder='Confirm Password'
                      type='password'
                      className='form-control form-control-lg placeholder'
                      value={password2}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-8'></div>
                <div className='col-sm-4 text-right'>
                  <button type='submit' className='btn btn-primary mt-2'>
                    Sign Up
                  </button>
                </div>
              </div>

              <span className='mt-3 mb-3 line-thru text-center text-uppercase'>
                <span>or</span>
              </span>
              <p className='text-center'>
                Already have an account? <a href='pages-signin.html'>Sign In!</a>
              </p>
            </form>
          </div>
        </div>

        <p className='text-center text-muted mt-3 mb-3'>&copy; Copyright 2017. All Rights Reserved.</p>
      </div>
    </section>
  );
}

export default Register;
