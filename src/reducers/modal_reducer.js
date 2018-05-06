const modalReducer = (state = { modal: false, payment: false }, action) => {
	switch (action.type) {
		case 'SHOW_AND_HIDE_MODAL':
			return (state.modal) ? { modal: false, payment: false } : { ...state, modal: true };

		case 'PAY_FOR_PRODUCTS':
			return (state.payment) ? { ...state, payment: false } : { ...state, payment: true };

		default:
			return state;
	}
}

export default modalReducer;