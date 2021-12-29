export const searchFilter = (goods,value)=>{	
  return value ? goods.filter(goodsItem=>goodsItem.title.toLowerCase().includes(value.toLowerCase())) : goods;   
};
    
export const categoryFilter = (goods,value)=>{
  return goods.filter(goodsItem=>goodsItem.category===value  
)};
    