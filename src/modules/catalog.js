import getData from "./getData";
import renderGoods from "./renderGoods";
import {categoryFilter} from "./filters"

const catalog = () => {
  const btnCatalog = document.querySelector('.catalog-button > button');
  const catalogModal = document.querySelector('.catalog');
  const catalogModalItem = document.querySelectorAll('.catalog li');
  
  let isOpen = false;

  btnCatalog.addEventListener('click', ()=>{
    isOpen = !isOpen;
    
    if(isOpen) {catalogModal.style.display='block';
    } else {catalogModal.style.display='';}
  })
    
  catalogModalItem.forEach(item=>{
    item.addEventListener('click',(e)=>{
      const text=item.textContent;
      getData().then((data) => {
			renderGoods(categoryFilter(data,text))
		});
    })
  })

  window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        catalogModal.style.display = '';
      }
  });

  window.addEventListener('click',e=>{	  
	  if(!e.target.closest('.catalog-button') && !e.target.classList.contains('.catalog-item')){catalogModal.style.display='';}
  })

}

export default catalog