import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';
import { ToastContainer, Slide } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
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
		<ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover={false}
                transition={Slide}
            />
		</>
	)
}

export default App;


// npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch  