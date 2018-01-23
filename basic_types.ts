//boolean
let flag: boolean = true;
console.log("Value assigned to flag is:"+flag);

//number
let num: number = 6;
console.log("Value assigned to num is:" +num);

//string
let hello: string = "Hello Damian";
console.log("Value assigned Damian is:" +hello);

//array
let array: number[] = [1,2,3]
console.log("Value assigned to array is" +array);

//tuple
let x: [string, number];
x =["I am ", 21];
console.log(x[0].substr(1));

//enum
enum colour {Red, Green, Blue};
let c: colour = colour.Blue;