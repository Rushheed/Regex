//1. car and cat
let output =/ca(r|t)/.test("car cat")
console.log(output)

//2. Pop and prop
let pattern2 =/pop|prop/
let output2 = pattern2.test("pop prop")
console.log(output2) 

//3. ferret, ferry, ferrari
let pattern3 = /ferr(et|y|ari)/
let output3 = pattern3.test("ferret ferry ferrari")
console.log(output3)

//4. any word ending in ious
let pattern4 = /\w+ious/
let output4 =pattern4.test("delicious")
console.log(output4)

//5 a white space character
let pattern5 =/\s[.,:;]/
let output5 =pattern5.test(" .,:;")
console.log(output5)

//6. Any word longer than 6 letters
let pattern6 =/\w{6,}/
let output6 = pattern6.test("udochukwu")
console.log(output6)

//7. a word without letter e
let pattern7 =/[^cE\s]|\b/
let output7 = pattern7.test("crank")
console.log(output7)