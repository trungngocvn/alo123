// let height = [150 , 155 , 170 , 145 , 180];
// let sum = 0;
// a.unshift(gia tri); => thêm vào mảng ở vị trí đầu , giống push nhưng push thêm vào ở cuối
// a[index] = gia tri; => them vao

   // in ra chiều cao của từng người
//  for (let i = 0 ; i <= height.length ; i++) {
//      console.log(`${i+1} : height[i]`);
//  }

//     // tính chiều cao trung bình của 5 người
// for (let i = 0 ; i <= height.length ; i++) {
//     sum += height[i];
//     }
// let avg = sum / height.length ;
//     console.log(`trung binh : ${avg}`);
    
//     // in ra những người cao nhất
//     for (let i = 0 ; i <= height.length ; i++) {
//        if (height[i] > avg) {
//            console.log(height[i]);
//        }       
//           }

//     // in ra cao nhất thấp nhất.
// let max = height[0];
// for (let i = 0; i < height.length; i++) {
//     const height = height[i];
//     if(height > max) {
//         max = height;
//     }
    
// }
// console.log(`cao nhất : ${max}`);

// // min tương tự

// //  sắp xếp
// for (let i = 0; i < height.length - 1; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//         if(height[i] > height[j]) {
//             let temp = height[i];
//             height[i] = height[j];
//             height[j] = temp;
//         }
        
        
//     }
    
// }

// let count = 0;
// for (let i = 0; i < height.length; i++) {
//     const height = height[i];
//     if (height < 160) {
//         console.log(height);
//         count ++
//     }
    
// }
// console.log(` có ${count} người`);

// let n = Number(prompt(` Nhập vào 1 số `))
// while(n < 8  || n > 10) {
//     n = Number(prompt(` Nhập lại số >= 8 và n <= 10 `));

// }
// console.log(n);

// let passWord = (prompt(` Nhập mật khẩu >= 8 kí tự `))
// while(passWord.length < 8) {
    
//         passWord = prompt(` nhập lại mật khẩu `);
//         }
//         console.log(`mk la : ${passWord}`);

// pass có độ dài >= 8 và kí tự chứa @
// let pass = prompt(`nhap pass`);
// while(!(pass.length >= 8 || pass.indexOf(`@`) >= 0)){
//     pass = prompt(`nhap lai pass >= 8 va ki tu chua @`)
// }
// console.log(pass);

// let n = parseInt(prompt(`nhap vao 1 so bat ki`));
// let uoc = [];
// for (let i = 1; i <= n; i++) {
//     if(n % i === 0) {
//         uoc.push(i);
//     }
    
// }
// console.log(`co ${uoc.length} uoc la : ${uoc}`);

    

