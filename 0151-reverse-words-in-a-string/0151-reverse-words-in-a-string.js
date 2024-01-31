function reverseWords(s){
    let words = s.trim().split(/\s+/);
    let finalres = words.reverse().join(' ');
    return finalres;
}
let userinput = "   the sky is blue  ";
let getvalue = reverseWords(userinput);
console.log( getvalue);