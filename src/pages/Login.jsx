import { useEffect, useState } from "react";
import { handleLogin } from "./authSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../assets/Login.png";

function Login() {

	const { token } = useSelector(state => state.auth);
	const [username, setUsername] = useState("LParker22");
	const [password, setPassword] = useState("LParker22");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from || "/";

	useEffect(() => {
		if (token) {
			navigate(from, { replace: true });
		}
	}, [token])


	function handleSubmit(e) {
		e.preventDefault();
		dispatch(handleLogin({ username, password }));
	}

	return (
		<section className="min-h-screen mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 flex-col md:flex-row  flex justify-center items-center gap-8">
			<div className="h-32 w-32 md:h-auto md:w-auto">
				<img src={loginImage} alt="Login Logo Image" />
			</div>
			<div className="max-w-sm w-full">
				<h2 className="font-semibold text-xl mb-4">Login To Your Account</h2>
				<form
					className="w-full bg-white rounded py-4"
					onSubmit={handleSubmit}
				>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">
							Username
						</label>
						<input
							className="text-xs border border-gray-300 focus:border-blue-300 outline-none py-2 px-3 rounded w-full focus:transition-colors duration-1000"
							id="username"
							type="text"
							placeholder="Enter your username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
							Password
						</label>
						<input
							className="text-xs border border-gray-300 focus:border-blue-300 outline-none py-2 px-3 rounded w-full focus:transition-colors duration-1000"
							id="password"
							type="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Log In
						</button>
					</div>
				</form>
				<div>
					<span className="text-sm">Don't have an account yet?</span>
					<NavLink to="/signup" className={`flex items-center`} >
						<span className="text-sm underline text-blue-400">Join us to vibe!!</span>
					</NavLink>
				</div>
			</div>

		</section>
	);
};

export default Login