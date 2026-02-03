function palindrome(num){
    const s=String(num);
    const reversed=s.split('').reverse().join('');
    return s===reversed;
}
let number=121;
console.log(number+" is a palindrome?"+palindrome(number));