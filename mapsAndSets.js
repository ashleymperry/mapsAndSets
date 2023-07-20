//1
new Set([1,1,2,2,3,4])
//returns {1,2,3,4}

//2
[...new Set("referee")].join("")

//returns 'ref'

//3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//returns
/*0: {Array(3) => true}
1: {Array(3) => false}*/

//hasDuplicate()
const hasDuplicate = arr => new Set(arr).size !== arr.length

//vowelCount()
function vowelChar(char){
    return "aeiou".includes(char);
}

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCased = char.toLowerCase()
        if(vowelChar(lowerCased)){
            vowelMap.set(lowerCased, vowelMap.get(lowerCased) + 1);
        }else{
            vowelMap.set(lowerCased, 1);
        }
    }
    return vowelMap;
}
