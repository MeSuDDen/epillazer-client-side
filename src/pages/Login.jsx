import React from 'react'

import logo from '../assets/img/Admin/logo.svg'

const Login = () => {
	return (
		<div className='flex justify-center items-center w-full h-screen'>
			<div className='session'>
				<div className='left'>
					<img src={logo} alt='' className='st01 m-5' width={40} height={40} />
				</div>
				<form action='' className='log-in form__login' autoComplete='off'>
					<h4>
						<span>Admin </span>PANEL
					</h4>
					<p>Welcome back! Log in to your account to view today's clients:</p>
					<div className='floating-label'>
						<input
							placeholder='Email'
							type='email'
							name='email'
							id='email'
							autoComplete='off'
							className='input__login'
						/>
						<label htmlFor='email'>Email:</label>
						<div className='icon'>
							<svg
								enableBackground='new 0 0 100 100'
								version='1.1'
								viewBox='0 0 100 100'
								xmlSpace='preserve'
								xmlns='http://www.w3.org/2000/svg'
							>
								<style type='text/css'>{`.st0{fill:none;}`}</style>
								<g transform='translate(0 -952.36)'>
									<path d='m17.5 977c-1.3 0-2.4 1.1-2.4 2.4v45.9c0 1.3 1.1 2.4 2.4 2.4h64.9c1.3 0 2.4-1.1 2.4-2.4v-45.9c0-1.3-1.1-2.4-2.4-2.4h-64.9zm2.4 4.8h60.2v1.2l-30.1 22-30.1-22v-1.2zm0 7l28.7 21c0.8 0.6 2 0.6 2.8 0l28.7-21v34.1h-60.2v-34.1z' />
								</g>
								<rect className='st0' width='100' height='100' />
							</svg>
						</div>
					</div>
					<div className='floating-label'>
						<input
							placeholder='Password'
							type='password'
							name='password'
							id='password'
							autoComplete='off'
							className='input__login'
						/>
						<label htmlFor='password'>Password:</label>
						<div className='icon'>
							<svg
								enableBackground='new 0 0 24 24'
								version='1.1'
								viewBox='0 0 24 24'
								xmlSpace='preserve'
								xmlns='http://www.w3.org/2000/svg'
							>
								<style type='text/css'>
									{`.st0{fill:none;}.st1{fill:#010101;}`}
								</style>
								<rect className='st0' width='24' height='24' />
								<path d='M19,21H5V9h14V21z M6,20h12V10H6V20z' className='st1' />
								<path
									d='M16.5,10h-1V7c0-1.9-1.6-3.5-3.5-3.5S8.5,5.1,8.5,7v3h-1V7c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5V10z'
									className='st1'
								/>
								<path
									d='m12 16.5c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5zm0-2c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5 0.5-0.2 0.5-0.5-0.2-0.5-0.5-0.5z'
									className='st1'
								/>
							</svg>
						</div>
					</div>
					<button
						className='btn_form_login'
						type='submit'
						onClick={() => false}
					>
						Log in
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login
