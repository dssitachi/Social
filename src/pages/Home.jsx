import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleFetchFeed, handleGetBookmark } from "../components/FeedSlice"


function Home() {
	const dispatch = useDispatch();
	const { token } = useSelector(state => state.auth);
	useEffect(() => {
		dispatch(handleFetchFeed());
		dispatch(handleGetBookmark({token}));
	}, []);
	return (
		<main className="min-h-screen mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 flex">
			<Sidebar />
			<Outlet />
		</main>
	)
}

export default Home