function register(){
    console.log("register user");
}
function sendEmail(){
    console.log("send user email");
}
function login(){
    console.log("login here");
}
function getData(){
    console.log("get user data");
}
function displayData(){
    console.log("display user Data");
}
register();
sendEmail();
login();
getData();
displayData();
console.log("call other application");

function register(cb){
   
    setTimeout(()=>{
    console.log("register end");
    cb;
    },1000)
    // console.log("register user");
}
function sendEmail(cb){
    setTimeout(()=>{
    console.log("send user email end");
    cb;
    },2000)

    // console.log("send user email");
}
function login(){
    setTimeout(()=>{
    console.log("login here end");
    
    },3000)
    // console.log("login here");
}
function getData(cb){
    setTimeout(()=>{
    console.log("get data end");
    cb;
    },3000)
    // console.log("get user data");
}
function displayData(){
    console.log("display user Data");
}
register(()=>{
    sendEmail(()=>{
        login(()=>{
            getData(()=>{
                displayData();
            });
        });
    });
});



console.log("call other application");