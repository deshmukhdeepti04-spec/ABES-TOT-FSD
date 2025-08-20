// var a=12;
// console.log("HI" +a);
// var a=;
// console.log(typeof(a));
// multiple time deifne of same var
// var a=12;
// //t b=30;
// if(a>10){ 
//     let a=30;
//     console.log("a="+a);
// }
// console.log(a);
// let a=12;
// let b="12";
// if(a===b)
// {
//     console.log("Yes equal");

// }else{
//     console.log("Not equal");
// }

// function sum(a,b)
// {
// return a+b;

// }
// let val=sum(12,30);
// console.log("sum="+val);

// const data=function(){
// console.log("HELLO");

// }
// data();

// const data()=>{
//     return "HELLO";
// }
// // data()
// console.log(data());

// const sum=(a,b)=>{
//     return a=b;
// }
// const add=(a,b)=>a+b;
// add(12+30);

// (()=>{
//     console.log("hi")
// })();

// (function(){
//     console.log("Welcome");
// })();

// function greet(msg="hi"){
//     return "Hello"+msg;
//     // console.log("Hello"+msg);
// }
// // greet();
// console.log(greett("come"));

function selectlang(lang){
    let data;
    if(lang=="java"){
        function javaCompiler(){
            console.log("java Compiler selected");
            // return "java compiler selected";
    }
    data=javaCompiler();

    }
    else if (lang =="C"){
        function cCompiler(){
            console.log("c Compiler selected");
    }data=cCompiler();
}
    else {
        data="lang not found";
    }
}
selectlang("");