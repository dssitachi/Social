import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router"

function RequireAuth() {
	const { token } = useSelector(state => state.auth);
	const location = useLocation();

	return token ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{from: location}} />
	)
}

export default RequireAuth