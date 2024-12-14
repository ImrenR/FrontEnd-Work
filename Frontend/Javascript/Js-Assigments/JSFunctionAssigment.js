//-- JS FUNCTION ASSIGNMENT ---

//Question 1: Find even and odd numbers


function number(n) {
  return n % 2 === 0 ? "Even numbers" : "Odd numbers";
}
console.log(number(10));
console.log(number(5));

// Question 2: 5 in kati midir ?

function numberBes(n) {
  return n % 5 === 0 ? "Sayi 5 in katidir" : "Sayi 5 in Kati degildir";
}
console.log(numberBes(1235));
console.log(numberBes(12934589));

//3. Soru : Pozitif mi negatif mi

function negPoz(n) {
  if (n < 0) {
    console.log("Sayi Negatiftir");
  } else n > 0;
  console.log("Sayi Pozitiftir");
}

negPoz(-90);
negPoz(34);

//4. Soru : Girilen sayiyi mutlak degere cevirme

//!number = Math.abs(number) sayiyi mutlak sayiya cevirir
function mutlakSayi(n) {
  n = Math.abs(n);
  return n;
}
console.log(mutlakSayi(-45));

//5. Soru : Bir sayinin karesini alma

function kareAlma(n) {
  return (i = n * n);
}

console.log(kareAlma(6));

// 6. Soru : Girilen Sayinin Kac Basakli oldugunu bulan fonksiyon yazin
//! to.string sayiyi stringe cevirip uzunlugunu alir

function basamakSayi(n) {
  return n.toString().length;
}
console.log(basamakSayi(234970834509834));
// 7. Soru : Girilen iki sayinin toplamini bulma

function number(a, b) {
  return a + b;
}
console.log(number(45, 67));

// 8. Soru: 10 ve 20 arasinda mi ?

function betweenSayi(n) {
  return n > 10 && n < 20
    ? "Sayi 10 ile 20 arasindadir"
    : "Sayi 10 ile 20 arasinda degildir";
}
console.log(betweenSayi(4));

// 9. Soru : Dikdortgenin alanini hesaplama

function dikdortgenAlan(genislik, uzunluk) {
  return genislik * uzunluk;
}
console.log(dikdortgenAlan(4, 5));

// 10.Soru sayi negatifse 1 ekle negatifse 1 cikar

function sayilar(n) {
  if (n < 0) {
    return n + 1;
  } else n > 0;
  return n - 1;
}
console.log(sayilar(-90));
console.log(sayilar(7));

// 11. Soru : Fibonacci Serisi Bulma
//Anlamadim
// 12. Soru : ASal sayi kontrolu
//Anlamadim
// 13. Soru : SAyilarin tersini bulma
//! string dersinde gormustuk

function reverseNumber(number) {
  let isNegative = number < 0;
  number = Math.abs(number);
  let reversed = number.toString().split("").reverse().join("");
  let reversedNumber = parseInt(reversed);
  return isNegative ? -reversedNumber : reversedNumber;
}
console.log(reverseNumber(-12345));

//14. Soru : Bir sayının kendisinden başka tüm bölenlerinin toplamı kendisine eşitse mükemmel sayıdır (örn. 6  1  2  3. Bu tanıma uyan sayıları bulan bir fonksiyon yazın.

function isPerfectNumber(number){
  // Sayı negatifse mükemmel sayı olamaz, dolayısıyla hemen false döndürürüz//

  if(number <= 0){
    return false;
  }
  let sum = 0;
  for(let i=1; i<number; i++){
    if(number % i === 0) {
      sum +=i;
    }
  }
  return sum === number;
}
console.log(isPerfectNumber(28));