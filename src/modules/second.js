import getData from './getData';
import postData from './postData';
import delData from './delData.js';


const test = () =>{
	const cartBtn = document.querySelector('#cart');
		
	cartBtn.addEventListener('click', ()=>{
		getData().then((data) => console.log(data));		
	});	
}

export default test