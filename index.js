
const convertFahrToCelsius = (n) => {
    if (Array.isArray(n)) {
        return `${n} is not a valid number but a/an array.`
    } else if (isNaN(n) || n === null) {
        return `${n} is not a valid number but a/an ${typeof(n)}.`
    }else if (n === true || n === false) {
            return `${n} is not a valid number but a/an boolean.`
    } else {
        const answer =((n - 32) * 5/9).toFixed(4)
        return Number(answer)
        
    }
}


const checkYuGiOh = (n) => {
    let arr = [1];
    let value = ""
    if (isNaN(n)) {
        console.log(`invalid parameter: "${n}"`)
        return;
    }

    for (i = 2; i <= n; i++) {
        value = "";
        if (i % 2 === 0) {
            value += "yu";
        }
        if (i % 3 === 0) {
            value == "" ? (value += "gi") : (value += "-gi");
        }
        if (i % 5 === 0) {
            value == "" ? (value += "oh") : (value += "-oh");
        }
        if (value == "") {
            value = i;
        }

        arr.push(value);
        
    }
    return arr;
    // console.log(arr);
    // return;
}