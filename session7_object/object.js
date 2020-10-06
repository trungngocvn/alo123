// let o_empty = {}; // object rỗng

// let myInfo = {
//     "name": 'Trung' ,
//     'age': 26 ,
//     school: 'Mindx',
// };
// console.log(myInfo);
// myInfo.hobby = ['film' , 'run' , 'netflix'];
// console.log(myInfo);
// myInfo.age++
// console.log(myInfo);
// for (const key in myInfo) {
//     let value = myInfo[key];
//     console.log(`${key} : ${value}`);

  
// };

//=================//
// tạo 1 mảng chứa thông tin của 5 điện thoại
// mỗi điện thoại là 1 object chứa 3 thông tin
// tên, giá , hãng

//1. in danh sách mảng này
// cú pháp:
// 1. Tên: ...
//   Giá:...
//   Hãng
// 2.

let listPhone = [
    {
        name: 'Galaxy Fold 2',
        price: 50e6,
        brand: 'Samsung',
    },
    {
        name: 'IphoneX',
        price: 15e6,
        brand: 'Apple',
    },
    {
        name: 'Oneplus 8',
        price: 14e6,
        brand: 'Oneplus',
    },
    {
        name: 'Pixel 4XL',
        price: 15e6,
        brand: 'Google',
    },
    {
        name: 'Oppo Find 7',
        price: 9e6,
        brand: 'Oppo',
    },
];

// for (let i = 0; i < listPhone.length; i++) {
//     const phone = listPhone[i];
//     console.log(`${i + 1}`);
//    for (const key in phone) {
//        let value = phone[key]
//     console.log(`${key}: ${value}`);
           
//        }
//    }

// let newPhone ={
//     name: prompt(' Nhập tên điện thoại '),
//     price: Number(prompt(' Nhập giá tiền ')),
//     brand: prompt(' Nhập hãng của điện thoại '),
// };

// listPhone.push(newPhone);
// for (let i = 0; i < listPhone.length; i++) {
//     const phone = listPhone[i];
//     console.log(`${i + 1}`);
//    for (const key in phone) {
//        let value = phone[key]
//     console.log(`${key}: ${value}`);
           
//        }
//    }

//    let searchPrice = Number(prompt('Nhập vào giá tiền điện thoại muốn tìm'));
//    let searchResult = [];
//    for (let i = 0; i < listPhone.length; i++) {
//        const phone = listPhone[i];
//        if(phone.price > searchPrice) {
//            searchResult.push(phone);
//        }
//    }

let phoneName = prompt('Nhập tên');
searchResult = [];
for (let i = 0; i < listPhone.length; i++) {
    const phone = listPhone[i]
    if (phone.name.toLowerCase().includes(phoneName.toLowerCase())) {
        searchResult.push(phone);
    }

}

if(searchResult.length > 0) {
    console.log(` Có ${searchResult.length} đt thỏa mãn `);
};
for (let i = 0; i < searchResult.length; i++) {
    const phone = searchResult[i];
    console.log(`${i + 1}`);
   for (const key in phone) {
       let value = phone[key]
    console.log(`${key}: ${value}`);
   };
}

//
function print(list){
    for (let i = 0; i < list.length; i++) {
            const phone = list[i];
            console.log(`${i + 1}`);
           for (const key in phone) {
               let value = phone[key]
            console.log(`${key}: ${value}`);
                   
               }
           }
        
}