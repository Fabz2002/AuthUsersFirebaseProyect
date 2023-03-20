import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Alert } from './Alert';

function Login() {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const { login, loginWithGoogle, resetPassword } = useAuth();
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		setError('');
		try {
			await login(user.email, user.password);
			navigate('/');
		} catch (error) {
			setError(error.message);
		}
	};

	const handleChange = ({ target: { value, name } }) =>
		setUser({ ...user, [name]: value });

	const handleGoogleSignin = async () => {
		try {
			await loginWithGoogle();
			navigate('/');
		} catch (error) {
			setError(error.message);
		}
	};

	const handleResetPassword = async e => {
		e.preventDefault();
		if (!user.email) return setError('Write an email to reset password');
		try {
			await resetPassword(user.email);
			setError('We sent you an email. Check your inbox');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className="w-full flex flex-col justify-center items-center  h-screen bg-center bg-cover bg-[url('../../../public/img/BackgroundLogin.jpg')]">
			{error && <Alert message={error} />}
			<form
				className=' flex flex-col p-4 w-80 max-[330px]:w-full text-white 
            '
				onSubmit={() => handleSubmit()}
			>
				<div className='mb-8'>
					<label className=''>Email address</label>
					<input
						type='email'
						name='email'
						className='block w-full outline-none  bg-transparent border-b-2 border-slate-100 mt-4'
						onChange={handleChange}
						placeholder='youremail@company.tld'
						required
						id='email'
					/>
				</div>
				<div className='mb-8'>
					<label className='' htmlFor='password'>
						Password
					</label>
					<input
						type='password'
						name='password'
						className='block  w-full outline-none bg-transparent border-b-2 border-slate-100 mt-4'
						placeholder='*********'
						onChange={handleChange}
						required
						id='password'
					/>
				</div>
				<div className='flex items-center justify-between'>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'
					>
						Sign In
					</button>
					<a
						className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
						href='#!'
						onClick={handleResetPassword}
					>
						Forgot Password?
					</a>
				</div>
			</form>
			<button
				onClick={handleGoogleSignin}
				className='bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-auto'
			>
				Google login
			</button>
			<p className=' my-4 text-sm flex gap-4 px-3'>
				Do not have an account?
				<Link to='/register' className='text-blue-700 hover:text-blue-900'>
					Register
				</Link>
			</p>
		</div>
	);
}

export default Login;
