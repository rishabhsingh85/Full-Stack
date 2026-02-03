function sumofdigits(num){
    let sum=0;
    num=Math.abs(num);
    while(num>0){
        sum += num%10;
        num=Math.floor(num/10);
    }
    return sum;
}
let number=123
console.log("Sum of digits of",number,"is",sumofdigits(number));