module.exports = function reverse (n) {
let text = n.toString();
let i = 0;
let result = '';
while(i < text.length){
    result = text[i] + result;
    i = i + 1;
} 
return result;
}

