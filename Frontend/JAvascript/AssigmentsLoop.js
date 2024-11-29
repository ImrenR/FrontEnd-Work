//----- JS LOOPS -----
//1. Soru : 1 den N ye kadar olan sayilarin toplami (use for) //

function sumUpToN(n) {
  let sum = 0;
  i = 1;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumUpToN(10)); 

//2. Soru : N faktoriyelini hesaplama (for) 

function factorial(n) {
  let result = 1 ;
  for( let i = 1; i<=n; i++) {
   result *= i
}
return result;
}
console.log(factorial(5));

// 3. Soru : 1 den N ye kadar olan sayilardan cift olanlarin sayisini bulma

function ciftSayilar(n){
  let count = 0
  for(let i = 1; i<=n; i++){
    if(i % 2 === 0){
      count++;
    }
  }
  return count;
}
console.log(ciftSayilar(10));

//4. Soru : Kullanicinin girdigi N sayisina kadar Asal SAyilari bulma(for)

// 5. Soru : N e kadar olan sayilardan 3 e tam bolunebilenlerin toplami 

function bolme(n){
  let sum = 0
  for(let i = 0; i<=n; i++){
    if(i % 3 === 0){
      sum += i;
    }

  }
  return sum
}
console.log(bolme(10))

// 7. Soru : Kullanicinin girdigi sayiya kadar ( start) 5 ile bolunebilen sayilari bulma(for)

function divideIT(n){
  for(let i =1; i<=n; i++){
   if(i % 5 === 0){
    console.log(i);
   }
  }
}
divideIT(20);
// 8. Soru : N sayisina kadar 1 den N e kadar olan sayilarin Karesinin toplami 

function kareTop(n){
let sum = 0
for(let i = 1 ; i<=n; i++){
  sum += i * i;
}
return sum
}
console.log(kareTop(3));

// 9. Soru : Kullanicinin Girdigi sayiya kadar FizzBuzz(for)
//! FizzBuzz : 3 e ve 5 e bolunen sayilar//
//! Buzz : sadece 5 e bolunen sayilar //
//! Fizz : 3 e bolunen sayilar //
function fizzBuzz(n){
  for(let i =1; i<=n; i++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
    } else if ( i % 3 === 0){
     console.log("Fizz");
    }
     else if(i % 5 === 0){
    console.log("Buzz");
  }else {
    console.log(i);
  }
}
}
fizzBuzz(15);
// 10. Soru : Kullanicidan 1 ile 10 arasinda bir sayi alarak tahmin oyunu oynamasi ( do while)

