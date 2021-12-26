const delData = () => {
	return fetch('http://localhost:3000/goods/26', {
		method: 'DELETE',
	})
	.then((response) => response.json())	
};

export default delData