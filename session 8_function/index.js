// function hello(){
//     console.log('Hello world');
// };

// hello();
// hello();

// function xinChao(s){
//     console.log(s);
// }

// xinChao('hello');

// function hello(s , a){
//     console.log(s);
//     console.log(a);
// }

// hello('xin chao' , 'hi');

// function tong(a,b){
//     console.log(`tong la ${a+b}`);
//     console.log(`hieu la ${a-b}`);
// }

// tong(10,6);
// cau 1
// function tongS(n) {
//     for (let i = 0; i <= n; i++) {
//        tongS += i 
//     }
//     return tongS;
// };

// // cau 2
// function giaiThua(m) {
//     for (let a = 1; a <= m; a++) {
//              giaiThua *= a
//     }
//     return giaiThua;
// };


// // cau 3
// function uoc(l) {
//     let cacuoc = []
//     for (let b = 1; b <= l; b++) {
//         if(l / b === 0)
//         cacuoc.push(b)
//     }
// };
 
// // cau 4
// function soNguyen(k) {
//     let cacSoNguyen = [];
//     for (let c = 1; c < k; c++) {
//     if(c / c === 1) {
//         cacSoNguyen.push(c)
//     }    
//     }
    
// }
//  // cau 5
// function tongMang(h) {
//     let mang = [];
//     for (let d = 0; d < h ; d++) {
        
//     }

// }


// Tìm số N của Fibonacci: 1,1,2,3,5,...

// function fibonacci(n) {
//     if (n === 1 || n === 2){
//         return 1;
//     }
//     return fibonacci ( n -1 ) + fibonacci (n - 2);
// }

let numbers = [5, 7, 8, 9, 10, 2, 3];

let x1 = numbers.find(function (v){
    return v % 2 === 1;
});
console.log(x1);

let x2 = numbers.find(function (v){
    return v > 10;
});
console.log(x2);
