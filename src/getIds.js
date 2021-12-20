const getIds = function(x){
	let start = x + 1
	let nums = []
	for (let i = start; i < start + 10; i ++){
		nums.push(i)
	}
	let idString = '';
	nums.forEach(function(num){
		idString = idString + num + '|';
	})
	idString = idString.slice(0, -1);
	return idString;
}

export default getIds