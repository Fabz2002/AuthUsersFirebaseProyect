import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Alert } from './Alert';
function Register() {
	const { signup } = useAuth();

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		setError('');
		try {
			await signup(user.email, user.password);
			navigate('/');
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
				onSubmit={handleSubmit}
			>
				<div className='mb-8 '>
					<label htmlFor='email'>Email address</label>
					<input
						type='email'
						name='email'
						onChange={e => setUser({ ...user, email: e.target.value })}
						className='block w-full outline-none  bg-transparent border-b-2 border-slate-100 mt-4 '
						placeholder='example@gmail.com'
					/>
				</div>
				<div className='mb-8'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						onChange={e => setUser({ ...user, password: e.target.value })}
						className='block  w-full outline-none bg-transparent border-b-2 border-slate-100 mt-4'
						placeholder='Ingresa la contraseña'
					/>
				</div>
				<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
					Register
				</button>
			</form>
			<p className='my-4 text-sm flex justify-between gap-2 px-3'>
				Already have an Account?
				<Link to='/login' className='text-blue-700 hover:text-blue-900'>
					Login
				</Link>
			</p>
		</div>
	);
}

export default Register;
