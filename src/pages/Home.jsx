import Feed from "../components/Feed"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"


function Home() {
	
	return (
		<main className="min-h-screen mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 flex">
			<Sidebar />
			<Feed />

		</main>
	)
}

export default Home