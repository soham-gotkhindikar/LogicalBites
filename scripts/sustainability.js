const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const search = urlParams.get('search');
