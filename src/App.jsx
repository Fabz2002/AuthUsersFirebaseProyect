import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/shared/Login';
import Register from './components/shared/Register';
import { Home } from './components/shared/Home';
import { ProtectedRoute } from './components/shared/ProtectedRoute';

import { AuthProvider } from './context/AuthContext';

function App() {
	return (
		<div className='bg-slate-300 h-screen flex text-white'>
			<AuthProvider>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route
						path='/'
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route path='/register' element={<Register />} />
				</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
