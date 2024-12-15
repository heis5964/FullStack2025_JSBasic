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

function addNumber(x, y) {
    return x + y;
}


sayHello('Tanes Suwattikul'); //function calling
sayHi("Tanes", 59);
const result = addNumber(5, 10);
console.log(result);