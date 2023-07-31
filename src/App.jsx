import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';
import { ToastContainer, Slide } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PostDetail from "./pages/PostDetail";
import Feed from "./components/Feed";
import Bookmark from "./pages/Bookmark";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route element={<RequireAuth />}>
						<Route element={<Home />}>
							<Route path="/" exact element={<Feed />} />
							<Route path="/posts/:id" element={<PostDetail />} />
							<Route path="/bookmark" element={<Bookmark />} />
						</Route>
					</Route>
					{/* <Route path="*" element={<PageNotFound />} /> */}
				</Routes>
			</Router>
			<ToastContainer
				position="bottom-center"
				autoClose={2000}
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