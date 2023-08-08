import { useState } from "react";
import { handleSignup } from "./authSlice";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import RegisterImg from "../assets/Register.png"

function Signup() {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		username: '',
		password: ''
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			handleSignup({
				firstName: formData.firstName,
				lastName: formData.lastName,
				username: formData.username,
				password: formData.password,
			})
		);
		setTimeout(() => {
			navigate('/login')
		}, 3000);
	};

	return (
		<section className="min-h-screen mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col justify-center items-center gap-8">
			<div className="text-center">
				<h1 className="text-3xl font-bold text-[#1DA1F2]">VibeVerse</h1>
				<span>Connecting Vibes, One Account at a Time: Join Vibeverse Today!</span>
			</div>
			<div className="flex flex-col md:flex-row justify-center items-center gap-8">
				<div className="h-32 w-32 md:h-auto md:w-auto">
					<img src={RegisterImg} alt="Register Logo Image" />
				</div>
				<div className="max-w-sm w-full">
					<form
						className="rounded pb-4"
						onSubmit={(e) => {
							handleSubmit(e);
						}}
					>
						<div className="mb-4">
							<label
								htmlFor="firstName"
								className="block text-gray-700 text-sm font-medium mb-1"
							>
								First Name
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								className="text-xs border border-gray-300 focus:border-blue-300 outline-none py-2 px-3 rounded w-full focus:transition-colors duration-1000"
								placeholder="Enter your first name"
								required
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="lastName"
								className="block text-gray-700 text-sm font-medium mb-1"
							>
								Last Name
							</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								className="text-xs border border-gray-300 focus:border-blue-300 outline-none py-2 px-3 rounded w-full focus:transition-colors duration-1000"
								placeholder="Enter your last name"
								required
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="username"
								className="block text-gray-700 text-sm font-medium mb-1"
							>
								Username
							</label>
							<input
								type="text"
								id="username"
								name="username"
								value={formData.username}
								onChange={handleChange}
								className="text-xs border border-gray-300 focus:border-blue-300 outline-none py-2 px-3 rounded w-full focus:transition-colors duration-1000"
								placeholder="Choose a username"
								required
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="password"
								className="block text-gray-700 text-sm font-medium mb-1"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
								className="text-xs border border-gray-300 focus:border-blue-300 outline-none py-2 px-3 rounded w-full focus:transition-colors duration-1000"
								placeholder="Enter a password"
								required
							/>
						</div>
						<div className="flex items-center justify-center">
							<button
								type="submit"
								className="button-primary bg-[#1DA1F2] w-full p-2 rounded text-white text-sm"
							>
								Sign Up
							</button>
						</div>
					</form>
					<div>
						<span className="text-sm">Already have an account?</span>
						<NavLink to="/login" className={`flex items-center`} >
							<span className="text-sm underline text-blue-400">Login to vibe!!</span>
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Signup