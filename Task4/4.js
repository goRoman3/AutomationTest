//pre-request 

const url = require('url');
let urlObject = url.parse(request.url);

let newVar = JSON.stringify(urlObject.href);

let urlAndQuery = newVar.replace(/["]+/g, '').split("&");
//console.log(urlAndQuery)

let mainURl = urlAndQuery[0];
//let queryParam = urlAndQuery[1].split("=");
let queryParam = urlAndQuery[1];

var fullUrlWitjReplace = mainURl + "&" + pm.globals.replaceIn(queryParam);
pm.globals.set("URL",fullUrlWitjReplace );