function MainPage({ email = 'ejemplo@gmail.com' }) {
	return (
		<main
			className='flex flex-col justify-center items-center 
        '
		>
			<section className='container flex flex-col pb-3 border-b-2 border-x-zinc-800'>
				<h5>
					Bienvenido ,<b>{email}</b> Haz iniciado sesion
				</h5>
				<button className='w-28 bg-blue-600  text-white mt-4 mx-1 p-2 rounded-md text-sm'>
					Cerrar Sesion
				</button>
			</section>
			<section className=' flex flex-col sm:grid grid-cols-6 container gap-4 pl-4 pr-4'>
				<div className='sm:col-span-2'>
					<h2 className='text-xl text-center'>Crear Usuario</h2>
					<form className='flex flex-col p-3   border border-slate-300 gap-2'>
						<input
							type='text'
							placeholder='ingresa el nombre del usuario'
							className='outline-none border-2 rounded-sm px-2 py-1  border-gray-300'
						/>
						<input
							type='text'
							placeholder='ingresa la edad del usuario'
							className='outline-none border-2 rounded-sm px-2 py-1  border-gray-300'
						/>
						<input
							type='text'
							placeholder='ingresa la posicion del usuario'
							className='outline-none border-2 rounded-sm px-2 py-1  border-gray-300'
						/>
						<button className='w-full bg-blue-600   text-white mt-4 py-1 px-4 rounded-sm '>
							Guardar
						</button>
					</form>
				</div>
				<div className='col-span-4 '>
					<h2 className='text-xl text-center'>Lista de Usuarios</h2>
					<div className='flex flex-col p-4 px-8  border border-slate-300'>
						<div className='border-b-2 border-gray-200 py-4'>
							<h3 className='mb-2'>Nombre: Jose Carlos Hernandez</h3>
							<p className='mb-2'>Edad: 24</p>
							<p className='mb-2'>Profesion: Administrador de empresas</p>
							<button className='bg-red-600 py-1 px-3 rounded-md mr-1 text-white mb-2'>
								Eliminar
							</button>
							<button className='bg-green-700 py-1 px-3 rounded-md text-white '>
								Actualizar
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default MainPage;
