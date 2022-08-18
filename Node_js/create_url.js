// import url from 'url';
const url = require('url');

const myURL = new URL('https://www.google.com/search?q=www.openweathermap.org+api&oq=www.openw&aqs=chrome.1.69i57j0i512l7.4151j0j1&sourceid=chrome&ie=UTF-8');
// myURL.pathname = '/a/b/c';
// myURL.search = '?d=e';
// myURL.hash = '#fgh';
// // muURL.port = 4000;

console.log(myURL);
console.log(myURL.href);