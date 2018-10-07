import {checkAuth} from "./utils";
import cookie from "react-cookies";

const Logout = () => {
	if( checkAuth() ) {
		cookie.remove( "sessaoUsuario" );
		window.location.reload();
	}

	return "";
}

export default Logout;