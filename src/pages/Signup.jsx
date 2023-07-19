import { useState } from "react";
import { handleSignup } from "./authSlice";
import { useDispatch } from "react-redux";

function Signup() {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		username: '',
		password: ''
	});

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
	};

	return (
		<main className="flex items-center justify-center min-h-screen bg-white">
			<div className="w-full max-w-md bg-gray-100">
				<form
					className=" rounded px-8 py-6"
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<h1 className="text-3xl font-medium text-center mb-8">
						Register
					</h1>
					<div className="mb-4">
						<label
							htmlFor="firstName"
							className="block text-gray-700 text-sm font-semibold mb-1"
						>
							First Name
						</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							className="text-sm border bg-transparent border-gray-300 focus:border-blue-300 outline-none p-1 rounded w-full focus:transition-colors duration-1000"
							placeholder="Enter your first name"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="lastName"
							className="block text-gray-700 text-sm font-semibold mb-1"
						>
							Last Name
						</label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							className="text-sm border border-gray-300 focus:border-blue-300 outline-none p-1 rounded w-full focus:transition-colors duration-1000"
							placeholder="Enter your last name"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="username"
							className="block text-gray-700 text-sm font-semibold mb-1"
						>
							Username
						</label>
						<input
							type="text"
							id="username"
							name="username"
							value={formData.username}
							onChange={handleChange}
							className="text-sm border border-gray-300 focus:border-blue-300 outline-none p-1 rounded w-full focus:transition-colors duration-1000"
							placeholder="Choose a username"
							required
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="password"
							className="block text-gray-700 text-sm font-semibold mb-1"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							className="text-sm border border-gray-300 focus:border-blue-300 outline-none p-1 rounded w-full focus:transition-colors duration-1000"
							placeholder="Enter a password"
							required
						/>
					</div>
					<div className="flex items-center justify-center">
						<button
							type="submit"
							className="button-primary bg-blue-600 w-full p-2 rounded text-white text-sm"
						>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</main>
	)
}

export default Signup