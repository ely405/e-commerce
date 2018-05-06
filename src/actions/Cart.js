const addToCartAction = (product)=> {
	return {
			type: 'ADD_TO_CART',
			product,
	};
}

const removeFromCartAction = product => {
	return {
			type: 'REMOVE_FROM_CART',
			product
	};
}

const addASameProductAction = product => {
	return {
			type: 'ADD_A_SAME_PRODUCT',
			product
	}
}

const removeAProductAction = product => {
	return {
			type: 'REMOVE_A_PRODUCT',
			product
	}
}

const payForProductsAction = (productsInCart, event) => {
	return {
			type: 'PAY_FOR_PRODUCTS',
			productsInCart,
			event
	}
}

export {
	addToCartAction,
	removeFromCartAction,
	addASameProductAction,
	removeAProductAction,
	payForProductsAction,
}