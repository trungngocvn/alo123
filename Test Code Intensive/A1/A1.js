//A1'js
//findOppositeNumber(10,2) tra ve 7
//findOppositeNumber(10,6) tra ve 1

let n = Number(prompt('Nhập số chẵn n trong khoảng từ 4-20:'))
if (n<4 || n>20 || n%2 !== 0) {
    alert('Sai điều kiện, xin vui lòng nhập lại!')
}
else {
    let inputNumber = Number(prompt('Nhập số bất kỳ trong dãy'))
    let findOppositeNumber = n/2 + inputNumber;
    let xnumber = inputNumber - n/2;
        if (n/2 > inputNumber) {
            alert('Số đối là: ' + findOppositeNumber)
        }
        else {
            alert('Số đối là: ' + xnumber)
        }
}

