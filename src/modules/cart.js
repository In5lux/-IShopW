import renderCart from './renderCart'
import { price } from './price';
import postData from './postData';

const cart = () => {
	const cartBtn = document.querySelector('#cart');
	const cartModal = document.querySelector('.cart');
	const cartCloseBtn = cartModal.querySelector('.cart-close');
	const cartTotal = cartModal.querySelector('.cart-total > span');
	const cartSendBtn = cartModal.querySelector('.cart-confirm');
	const goodsWrapper = document.querySelector('.goods');
	const cartWrapper = document.querySelector('.cart-wrapper');		

	cartBtn.addEventListener("click", () => {
		cartModal.style.display = "flex";
		const cartItems = localStorage.getItem('cart') && !undefined ? JSON.parse(localStorage.getItem('cart')) : [];
		renderCart(cartItems);
		cartTotal.textContent = price(cartItems.reduce((sum,goodItem)=>sum+goodItem.price,0));
		
		cartCloseBtn.addEventListener("click", () => {
			cartModal.style.display = "";
	});
	})

	goodsWrapper.addEventListener('click',(e)=>{			
    if (e.target.classList.contains('btn-primary')) {		
		const card = e.target.closest('.card');
		const key = card.dataset.key;
		const goods = JSON.parse(localStorage.getItem('goods'));
		const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
		const goodItem = goods.find(item=>item.id===+key);
		cartItems.push(goodItem);			
		localStorage.setItem('cart', JSON.stringify(cartItems));
    	};
	});

	cartWrapper.addEventListener('click',(e)=>{
	if (e.target.classList.contains('btn-primary')) {		
		const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
		const card = e.target.closest('.card');
      	const key = card.dataset.key;
		const index = cartItems.findIndex(item=>item.id ===+key);

		cartItems.splice(index,1);

		localStorage.setItem('cart', JSON.stringify(cartItems));  
		console.log(cartItems);
		renderCart(cartItems);
		cartTotal.textContent = price(cartItems.reduce((sum,goodItem)=>sum+goodItem.price,0));
		}		
  	});

	cartSendBtn.addEventListener('click',()=>{
		const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

		postData(cartItems).then(()=>{
			localStorage.removeItem('cart');
			renderCart([]);
			cartTotal.textContent = 0;
		});
	});

}

export default cart
