import axios from 'axios';

const loadProductsAction = () => {
	return dispatch => {
			return axios.get("./products.json")
			.then(res => {
					dispatch({
							type: 'LOAD_PRODUCTS',
							products: res.data
					});
			});
	}
}

export {
	loadProductsAction,
}