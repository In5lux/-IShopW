const getData = () => {
	return fetch('https://test2-692cf-default-rtdb.firebaseio.com/goods.json')
	.then(response => {
		return response.json()
	})	
};

export default getData