import axios from "axios";

const BACK_URL = 'http//192.168.1.24:3000'

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetToken = () => {
	console.log('WSgetToken')
	console.log(BACK_URL)
	return axios.get(BACK_URL + '/login')
}