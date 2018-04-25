//declaramos el estado inicial en state

const initialStateProduct = []

const productReducer = (state = initialStateProduct, action) => {
    if (action.type === 'LOAD_PRODUCTS') {
        return action.products;
    }
    return state;
}

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
            console.warn('PRODUCTRP', productToDispatch);
            return productToDispatch;

            break;

        case 'REMOVE_FROM_CART':
            // console.warn('REMOVE_FROM CART STATE', state);
            return state.filter(product => {
                
                action.product.quantity = 0;
                return product.id !== action.product.id
            });
            break;

        case 'ADD_A_SAME_PRODUCT':
            action.product.quantity += 1;
            const indProductToAdd = state.indexOf(action.product);
            state.splice(indProductToAdd, 1, action.product);
            return state.filter(pro => pro);
            break;

        case 'REMOVE_A_PRODUCT':

            if(action.product.quantity <=  1){
                return state.filter(product => {
                    action.product.quantity = 0;
                    return product.id !== action.product.id
                });
            } else {
                action.product.quantity -= 1;
                const indProductToRemove = state.indexOf(action.product);
                state.splice(indProductToRemove, 1);
                return state.concat(action.product);
            }
            break;
        default:
            return state;
            break;
    }
}

const modalReducer = (state = false, action) => {
    switch (action.type) {

        case 'SHOW_AND_HIDE_MODAL':
            alert('click' + state);
        
            console.log('estado modla', state);
            console.log('SHOW AND HIDE', action, 'elemento', document.getElementById(`${action.idElementToShowInModal}`));
            
            if(state === false){
                document.getElementById(`${action.idElementToShowInModal}`).style.display = 'flex';
                return true;
            }else{
                document.getElementById(`${action.idElementToShowInModal}`).style.display = 'none';
                return false;
            }

            // return (state === false)? true : false;
            break;
        default:
            return state;
            break;
    }
}

export {
    productReducer,
    cartReducer,
    modalReducer,
}