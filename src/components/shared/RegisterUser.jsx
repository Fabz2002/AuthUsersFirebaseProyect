function RegisterUser() {
	return (
		<div className="w-full flex flex-col justify-center items-center  h-screen bg-center bg-cover bg-[url('../../../public/img/BackgroundLogin.jpg')]">
			<h1 className='text-4xl  mb-3 text-white'>Registrate</h1>
			<form
				className=' flex flex-col p-4 w-80 max-[330px]:w-full text-white border border-slate-300 
            '
			>
				<div className='mb-4'>
					<label className=''>Email address</label>
					<input
						type='text'
						className='block w-full outline-none  bg-transparent border-b-2 border-slate-100'
						placeholder='example@gmail.com'
					/>
				</div>
				<div className='mb-4'>
					<label className=''>Password</label>
					<input
						type='text'
						className='block  w-full outline-none bg-transparent border-b-2 border-slate-100'
						placeholder='Ingresa la contraseña'
					/>
				</div>
				<button className='w-full bg-blue-600   text-white mt-4 py-1 px-4 rounded-sm text-lg'>
					Registrate
				</button>
			</form>
			<button className='bg-gray-500 w-80  max-[330px]:w-full rounded-md mt-4 py-1 px-4 text-white'>
				Ya tienes cuenta? Inicia sesion
			</button>
		</div>
	);
}

export default RegisterUser;
