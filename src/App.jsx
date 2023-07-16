import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route element={<RequireAuth />}>
					<Route path="/" element={<Home />} />
				</Route>
				{/* <Route path="*" element={<PageNotFound />} /> */}
			</Routes>
		</Router>
	)
}

export default App;
