let uc = require("upper-case");

function greeter(_str){
    console.log(uc.upperCase(_str));
}

for(let i=0; i<10;i++){
    greeter("Hello World")
}
