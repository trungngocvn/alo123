    //A2'js
    //merge2String("abc","123") tra ve a1b2c3
    
    function merge2String(s1, s2) {
        let mergedString = ""
        if (s1.length <= s2.length) {
            for (let i = 0; i < s1.length; i++) {
                mergedString = mergedString + s1[i] + s2[i]
            }
            for (let j = s1.length; j < s2.length; j++) {
                mergedString = mergedString + s2[j]
            }
        } else {
            for (let i = 0; i < s2.length; i++) {
                mergedString = mergedString + s1[i] + s2[i]
            }
            for (let j = s2.length; j < s1.length; j++) {
                mergedString = mergedString + s1[j]
            }
        }
        return mergedString
    }

    let s1 = prompt("Nhập vào chuỗi thứ nhất: ")
    let s2 = prompt("Nhập vào chuỗi thứ hai: ")
    console.log("Kết quả là: ")
    console.log(merge2String(s1, s2))