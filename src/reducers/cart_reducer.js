const cartReducer = (state = [], action) => {
	switch (action.type) {

		case 'ADD_TO_CART':
			action.product.quantity += 1;

			const allProduct = state.concat(action.product);
			const productSorted = allProduct.sort((prod1, prod2) => prod1.id > prod2.id);

			let productToDispatch = [];
			productSorted.map((prodItem, i) => {
				if (i > 0) {
					if (prodItem.id !== productSorted[i - 1].id) {
						productToDispatch.push(prodItem);
					}
				} else {
					productToDispatch.push(prodItem);
				}
			});
			document.querySelector(`#product-${action.product.id} .icon-shopping-cart`).className = 'icon-shopping-cart icon-shopping-animation';

			setTimeout(() => {
				document.querySelector(`#product-${action.product.id} .icon-shopping-cart`).className = 'icon-shopping-cart';
			}, 1200);
			return productToDispatch;

		case 'REMOVE_FROM_CART':
			return state.filter(product => {

				action.product.quantity = 0;
				return product.id !== action.product.id
			});

		case 'ADD_A_SAME_PRODUCT':
			action.product.quantity += 1;
			const indProductToAdd = state.indexOf(action.product);
			state.splice(indProductToAdd, 1, action.product);
			return state.filter(pro => pro);

		case 'REMOVE_A_PRODUCT':

			if (action.product.quantity <= 0) {
				return state.filter(product => {
					action.product.quantity = 0;
					return product.id !== action.product.id
				});
			} else {
				action.product.quantity -= 1;
				const indProductToRemove = state.indexOf(action.product);
				state.splice(indProductToRemove, 1, action.product);
				return state.filter(pro => pro);
			}

		case 'PAY_FOR_PRODUCTS':
			action.event.stopPropagation();
			state.map(prod => {
				prod.quantity = 0
				return prod;
			});
			return state.filter(pro => pro.quantity !== 0)

		default:
			return state;
	}
}

export default cartReducer;