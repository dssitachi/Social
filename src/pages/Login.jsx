import { useEffect, useState } from "react";
import { handleLogin } from "./authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {

	const { token } = useSelector(state => state.auth);
	const [username, setUsername] = useState("adarshbalika");
	const [password, setPassword] = useState("adarshBalika123");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from || "/";
	
	useEffect(() => {
		if(token) {
			navigate(from, {replace: true});
		}
	}, [token])


	function handleSubmit(e) {
		e.preventDefault();
		dispatch(handleLogin({ username, password }));
	}

	return (
		<div className="flex justify-center items-center min-h-screen">
			<form
				className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				onSubmit={handleSubmit}
			>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
						Username
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="username"
						type="text"
						placeholder="Enter your username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
						Password
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Log In
					</button>
					<a
						className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
						href="#"
					>
						Forgot Password?
					</a>
				</div>
			</form>
		</div>
	);
};

export default Login