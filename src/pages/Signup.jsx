import { useState } from "react";
import { handleSignup } from "./authSlice";
import { useDispatch } from "react-redux";

function Signup() {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		username: '',
		password: '',
		avatarURL:
		"https://images.pexels.com/lib/avatars/purple.png?w=50&h=50&fit=crop",
	});

	const handleChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		// e.preventDefault();
		// // Perform registration logic here
		// console.log(formData);
		// dispatch(
		// handleSignup({firstName,lastName, username, password, avatarURL})
		// );
	};

	return (
		<main className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md">
				<form
					className="bg-white shadow-md rounded px-8 py-6"
					onSubmit={(e) => {
						e.preventDefault();
						// Perform registration logic here
						console.log(formData);
						dispatch(
						handleSignup({
							firstName: formData.firstName,
							lastName: formData.lastName,
							username: formData.username,
							password: formData.password,
							avatarURL: formData.avatarURL,
						})
						);
					}}
				>
					<h1 className="text-4xl font-bold text-center mb-8">
						Create an Account
					</h1>
					<div className="mb-4">
						<label
							htmlFor="firstName"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							First Name
						</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							className="input-field"
							placeholder="Enter your first name"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="lastName"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Last Name
						</label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							className="input-field"
							placeholder="Enter your last name"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="username"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Username
						</label>
						<input
							type="text"
							id="username"
							name="username"
							value={formData.username}
							onChange={handleChange}
							className="input-field"
							placeholder="Choose a username"
							required
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="password"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							className="input-field"
							placeholder="Enter a password"
							required
						/>
					</div>
					<div className="flex items-center justify-center">
						<button
							type="submit"
							className="button-primary"
						>
							Register
						</button>
					</div>
				</form>
			</div>
		</main>
	)
}

export default Signup