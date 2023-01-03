const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'e092e34311msha285efe180ea0c3p1bd7c3jsn1538c07708ce',
		'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
	},
	body: '{"search_terms":"python programmer","location":"30301","page":"1"}'
};

fetch('https://linkedin-jobs-search.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));