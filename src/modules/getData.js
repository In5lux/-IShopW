const getData = (str) => {
	return fetch(`https://test2-692cf-default-rtdb.firebaseio.com/goods.json?${str?`search=${str}`:''}`)
	.then(response => {
		return response.json()
	})	
};

export default getData