import getData from './getData';
import renderGoods from './renderGoods';

export const searchFilter = (goods, value) => {
  return value
    ? goods.filter((goodsItem) =>
        goodsItem.title.toLowerCase().includes(value.toLowerCase())
      )
    : goods;
};

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => goodsItem.category === value);
};

export const priceRangeFilter = (goods, min, max) => {
  return goods.filter((goodsItem) => {
    if (min === '' && max === '') {
      	return goodsItem
    } else if (min !== '' && max !== '') {
		return goodsItem.price > +min && goodsItem.price <= +max
    } else if (min !== '' && max === '') {
      	return goodsItem.price > +min
    } else if (min === '' && max !== '') {
      	return goodsItem.price <= +max
    }
  });
};

export const saleFilter = (goods, value) => {
  return goods.filter((goodsItem) => value ? goodsItem.sale === value : goodsItem);
};

export const priceFilter = () =>{
	const minInput = document.getElementById('min');
	const maxInput = document.getElementById('max');
	const checkboxInput = document.getElementById('discount-checkbox');
	const checkboxSpan = document.querySelector('.filter-check_checkmark ');

	minInput.addEventListener('input', () => {
  		getData().then((data) => {
    		renderGoods(priceRangeFilter(saleFilter(data, checkboxInput.checked), minInput.value,maxInput.value));
  		});
	});
	maxInput.addEventListener('input', () => {
  		getData().then((data) => {
    		renderGoods(priceRangeFilter(saleFilter(data, checkboxInput.checked), minInput.value,maxInput.value));
  		});
	});
	checkboxInput.addEventListener('change',()=>{
		if (checkboxInput.checked){			
			checkboxSpan.classList.add('checked');		  			
		} else {
			checkboxSpan.classList.remove('checked');		
		}		
		getData().then((data) => {
    		renderGoods(priceRangeFilter(saleFilter(data, checkboxInput.checked), minInput.value,maxInput.value));
  		});	
	})
};




