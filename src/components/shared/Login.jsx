function Login() {
	return (
		<div className="w-full flex justify-center items-center  h-screen bg-center bg-cover bg-[url('../../../public/img/BackgroundLogin.jpg')]">
			<form
				className='  flex flex-col p-4 text-lg text-white 
            '
			>
				<h1 className='text-4xl text-center mb-8'>Inicio Sesión</h1>
				<div className='mb-4'>
					<label className=''>Email address</label>
					<input
						type='text'
						className='block  bg-transparent border-b-2 border-slate-100'
						placeholder='example@gmail.com'
					/>
				</div>
				<div className='mb-4'>
					<label className=''>Password</label>
					<input
						type='text'
						className='block  bg-transparent border-b-2 border-slate-100'
						placeholder='******'
					/>
				</div>
				<button className='w-full bg-blue-600 text-white mt-4 py-1 px-4 rounded-sm text-xl'>
					Inicia sesión
				</button>
			</form>
		</div>
	);
}

export default Login;
