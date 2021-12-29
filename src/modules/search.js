import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from "./filters";

const search = ()=>{
  const searchInput = document.querySelector('.search-wrapper_input');
  const searchBtn = document.querySelector('.search-btn');
  
  searchBtn.addEventListener('click', () =>{    
	const value = searchInput.value;
    getData().then((data) => {			
			renderGoods(searchFilter(data,value))
	});	
  });
  window.addEventListener('keydown', (e) => {
	const value = searchInput.value;	
	if (e.target===searchInput && e.key === 'Enter') {
    getData().then((data) => {
			renderGoods(searchFilter(data,value))
	});
    }
  });
};

export default search