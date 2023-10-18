function makeAllCaps(arr) {
    let newArr = [];
    let i = 0;
    return new Promise((resolve, reject) => {
        arr.forEach(word => {
            if (typeof word !== "string") {
                reject('there was word is not a string')
            } else {
                newArr[i++] = word.toUpperCase();
            }
        })
        resolve(newArr)
    })
}

function sortWords(arr) {
    return new Promise((resolve, reject) => {
        arr.forEach(word => {
            if (typeof word !== "string") {
                reject('there was word is not a string')
            }
        })
        resolve(arr.sort())
    })
}


makeAllCaps(["sdf", "5"])
    .then((a) => {
        console.log(a);
    }).catch((e) => {
        console.log(e);
    })
makeAllCaps(["sdf", 5])
    .then((a) => {
        console.log(a);
    }).catch((e) => {
        console.log(e);
    })
sortWords(["cd", "ba", "a"])
    .then((a) => {
        console.log(a);
    }).catch((e) => {
        console.log(e);
    })
sortWords(["cd", "ba", "a", 5])
    .then((a) => {
        console.log(a);
    }).catch((e) => {
        console.log(e);
    })