var marked = require('marked')
var request = require("request")

request("https://alpha-soundyogi.c9.io/tldr/0001_theponyfoochallenge.md", function(a,b,c){
    var node = document.createElement("section") 
    var article = node.appendChild(document.createElement("article"))  
    article.innerHTML = marked(c)
    document.body.appendChild(node)
})