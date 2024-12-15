function sayHello(name) {
    console.log("-----");
    console.log("Hello", name);
    console.log("-----");    
}

// Arrow Function
const sayHi = (name, age) => {
    console.log("***** START ******");
    console.log("Hi " + name + "," + age);
    console.log("****** END ******");
}

sayHello('Tanes Suwattikul'); //function calling
sayHi("Tanes", 59);